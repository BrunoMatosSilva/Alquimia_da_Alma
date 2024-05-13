import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';
import { AppointmentService } from './appointment.service';
export declare class AppointmentController {
    private readonly appointmentService;
    constructor(appointmentService: AppointmentService);
    create(createAppoitmentDto: CreateAppointmentDto): Promise<{
        id: string;
        patientId: string;
        psychologistId: string;
        date: Date;
        time: string;
    }>;
    findAll(day: number, month: number, year: number, psychologistId?: string): Promise<{
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
