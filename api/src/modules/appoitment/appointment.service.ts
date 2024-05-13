import { BadRequestException, Injectable } from '@nestjs/common';
import { AppointmentsRepository } from 'src/shared/database/repositories/appointments.repositories';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';

@Injectable()
export class AppointmentService {
  constructor(private readonly appointmentsRepo: AppointmentsRepository){}

 async create(createAppointmentDto: CreateAppointmentDto) {
    const { 
      patientId, 
      psychologistId, 
      date, 
      time
    } = createAppointmentDto

      const existingAppoitment = await this.appointmentsRepo.findOne({
        where: {
          patientId,
          psychologistId,
          date,
          time,
        },
      });
  
      if (existingAppoitment) {
        throw new BadRequestException(
          'There is already an appointment scheduled for the same day and time.'
        );
      }

      const conflictingPatientAppoitment = await this.appointmentsRepo.findOne({
        where: {
          patientId,
          date,
          time,
        },
      });
  
      if (conflictingPatientAppoitment) {
        throw new BadRequestException(
          'There is already an appointment scheduled for the same patient.'
        );
      }

    return this.appointmentsRepo.create({
      data: {
        patientId,
        psychologistId,
        date,
        time
      }
    })
  }

  async findAll( 
    filters: {
    day: number,
    month: number,
    year: number,
    psychologistId?: string
  }
) {
    return this.appointmentsRepo.findMany({
      where: {
        psychologistId: filters.psychologistId,
        date: {
          gte: new Date(Date.UTC(filters.year, filters.month, filters.day)),
          lte: new Date(Date.UTC(filters.year, filters.month, filters.day +1)),
        }
      },
      orderBy: {
        time: 'asc'
      },
      include: {
        patient: {
          select: {
            id: true,
            name: true,
          }
        },
        psychologist: {
          select: {
            id: true,
            name: true,
          }
        }
      }
    });
  }

  async findOne(AppointmentId: string) {
    return this.appointmentsRepo.findUnique({
      where: { id: AppointmentId },
      include: {
        patient: {
          select: {
            id: true,
            name: true,
          }
        },
        psychologist: {
          select: {
            id: true,
            name: true,
          }
        }
      }
    }) ;
  }

  async update(AppointmentId: string, updateAppointmentDto: UpdateAppointmentDto) {
    const { 
      patientId,
      psychologistId,
      date,
      time
    } = updateAppointmentDto;

    return this.appointmentsRepo.update({
      where: { id: AppointmentId },
      data: {
        patientId,
        psychologistId,
        date,
        time
      }
    });
  }

  async remove(AppointmentId: string) {
    await this.appointmentsRepo.delete({
      where: { id: AppointmentId }
    })

    return null;
  }
}
