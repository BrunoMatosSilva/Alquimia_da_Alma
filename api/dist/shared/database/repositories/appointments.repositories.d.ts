import { PrismaService } from "../prisma.service";
import { Prisma } from "@prisma/client";
export declare class AppointmentsRepository {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(createDto: Prisma.AppointmentCreateArgs): Prisma.Prisma__AppointmentClient<import("@prisma/client/runtime").GetResult<{
        id: string;
        patientId: string;
        psychologistId: string;
        date: Date;
        time: string;
    }, unknown> & {}, never, import("@prisma/client/runtime").DefaultArgs>;
    findMany(findManyDto: Prisma.AppointmentFindManyArgs): Prisma.PrismaPromise<(import("@prisma/client/runtime").GetResult<{
        id: string;
        patientId: string;
        psychologistId: string;
        date: Date;
        time: string;
    }, unknown> & {})[]>;
    findUnique(findUnique: Prisma.AppointmentFindUniqueArgs): Prisma.Prisma__AppointmentClient<import("@prisma/client/runtime").GetResult<{
        id: string;
        patientId: string;
        psychologistId: string;
        date: Date;
        time: string;
    }, unknown> & {}, null, import("@prisma/client/runtime").DefaultArgs>;
    findOne(findOneDto: Prisma.AppointmentFindFirstArgs): Prisma.Prisma__AppointmentClient<import("@prisma/client/runtime").GetResult<{
        id: string;
        patientId: string;
        psychologistId: string;
        date: Date;
        time: string;
    }, unknown> & {}, null, import("@prisma/client/runtime").DefaultArgs>;
    update(updateDto: Prisma.AppointmentUpdateArgs): Prisma.Prisma__AppointmentClient<import("@prisma/client/runtime").GetResult<{
        id: string;
        patientId: string;
        psychologistId: string;
        date: Date;
        time: string;
    }, unknown> & {}, never, import("@prisma/client/runtime").DefaultArgs>;
    delete(deleteDto: Prisma.AppointmentDeleteArgs): Prisma.Prisma__AppointmentClient<import("@prisma/client/runtime").GetResult<{
        id: string;
        patientId: string;
        psychologistId: string;
        date: Date;
        time: string;
    }, unknown> & {}, never, import("@prisma/client/runtime").DefaultArgs>;
}
