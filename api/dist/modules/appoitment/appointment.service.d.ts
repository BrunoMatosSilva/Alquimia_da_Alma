import { AppointmentsRepository } from 'src/shared/database/repositories/appointments.repositories';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';
export declare class AppointmentService {
    private readonly appointmentsRepo;
    constructor(appointmentsRepo: AppointmentsRepository);
    create(createAppointmentDto: CreateAppointmentDto): Promise<import("@prisma/client/runtime").GetResult<{
        id: string;
        patientId: string;
        psychologistId: string;
        date: Date;
        time: string;
    }, unknown> & {}>;
    findAll(filters: {
        day: number;
        month: number;
        year: number;
        psychologistId?: string;
    }): Promise<(import("@prisma/client/runtime").GetResult<{
        id: string;
        patientId: string;
        psychologistId: string;
        date: Date;
        time: string;
    }, unknown> & {})[]>;
    findOne(AppointmentId: string): Promise<import("@prisma/client/runtime").GetResult<{
        id: string;
        patientId: string;
        psychologistId: string;
        date: Date;
        time: string;
    }, unknown> & {}>;
    update(AppointmentId: string, updateAppointmentDto: UpdateAppointmentDto): Promise<import("@prisma/client/runtime").GetResult<{
        id: string;
        patientId: string;
        psychologistId: string;
        date: Date;
        time: string;
    }, unknown> & {}>;
    remove(AppointmentId: string): Promise<any>;
}
