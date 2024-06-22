import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';
import { AppointmentService } from './appointment.service';
export declare class AppointmentController {
    private readonly appointmentService;
    constructor(appointmentService: AppointmentService);
    create(createAppoitmentDto: CreateAppointmentDto): Promise<import("@prisma/client/runtime").GetResult<{
        id: string;
        patientId: string;
        psychologistId: string;
        date: Date;
        time: string;
    }, unknown> & {}>;
    findAll(day: number, month: number, year: number, psychologistId?: string): Promise<(import("@prisma/client/runtime").GetResult<{
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
