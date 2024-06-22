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
    } = createAppointmentDto;
  
    const existingPsychologistAppointment = await this.appointmentsRepo.findOne({
      where: {
        psychologistId,
        date,
        time,
      },
    });
  
    if (existingPsychologistAppointment) {
      throw new BadRequestException(
        'The psychologist already has an appointment scheduled at this time.'
      );
    }
  
    const conflictingPatientAppointment = await this.appointmentsRepo.findOne({
      where: {
        patientId,
        date,
        time,
      },
    });
  
    if (conflictingPatientAppointment) {
      throw new BadRequestException(
        'The patient already has an appointment scheduled at this time.'
      );
    }
  
    return this.appointmentsRepo.create({
      data: {
        patientId,
        psychologistId,
        date,
        time,
      },
    });
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
          gte: new Date(Date.UTC(filters.year, filters.month -1, filters.day)),
          lte: new Date(Date.UTC(filters.year, filters.month -1, filters.day +1)),
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
