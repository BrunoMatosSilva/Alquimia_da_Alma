import { PrismaService } from "../prisma.service";
import { Prisma } from "@prisma/client";
export declare class AppointmentsRepository {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(createDto: Prisma.AppointmentCreateArgs): Prisma.Prisma__AppointmentClient<{
        id: string;
        patientId: string;
        psychologistId: string;
        date: Date;
        time: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findMany(findManyDto: Prisma.AppointmentFindManyArgs): Prisma.PrismaPromise<{
        id: string;
        patientId: string;
        psychologistId: string;
        date: Date;
        time: string;
    }[]>;
    findUnique(findUnique: Prisma.AppointmentFindUniqueArgs): Prisma.Prisma__AppointmentClient<{
        id: string;
        patientId: string;
        psychologistId: string;
        date: Date;
        time: string;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    findOne(findOneDto: Prisma.AppointmentFindFirstArgs): Prisma.Prisma__AppointmentClient<{
        id: string;
        patientId: string;
        psychologistId: string;
        date: Date;
        time: string;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(updateDto: Prisma.AppointmentUpdateArgs): Prisma.Prisma__AppointmentClient<{
        id: string;
        patientId: string;
        psychologistId: string;
        date: Date;
        time: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    delete(deleteDto: Prisma.AppointmentDeleteArgs): Prisma.Prisma__AppointmentClient<{
        id: string;
        patientId: string;
        psychologistId: string;
        date: Date;
        time: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
