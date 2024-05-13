import { AppointmentsRepository } from 'src/shared/database/repositories/appointments.repositories';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';
export declare class AppointmentService {
    private readonly appointmentsRepo;
    constructor(appointmentsRepo: AppointmentsRepository);
    create(createAppointmentDto: CreateAppointmentDto): Promise<{
        id: string;
        patientId: string;
        psychologistId: string;
        date: Date;
        time: string;
    }>;
    findAll(filters: {
        day: number;
        month: number;
        year: number;
        psychologistId?: string;
    }): Promise<{
        id: string;
        patientId: string;
        psychologistId: string;
        date: Date;
        time: string;
    }[]>;
    findOne(AppointmentId: string): Promise<{
        id: string;
        patientId: string;
        psychologistId: string;
        date: Date;
        time: string;
    }>;
    update(AppointmentId: string, updateAppointmentDto: UpdateAppointmentDto): Promise<{
        id: string;
        patientId: string;
        psychologistId: string;
        date: Date;
        time: string;
    }>;
    remove(AppointmentId: string): Promise<any>;
}
