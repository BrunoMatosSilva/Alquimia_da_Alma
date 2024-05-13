import { PrismaService } from "../prisma.service";
import { Prisma } from "@prisma/client";
export declare class PsychologistsRepository {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(createDto: Prisma.PsychologistCreateArgs): Prisma.Prisma__PsychologistClient<{
        id: string;
        name: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findMany(findManyDto: Prisma.PsychologistFindManyArgs): Prisma.PrismaPromise<{
        id: string;
        name: string;
    }[]>;
    findUnique(findUnique: Prisma.PsychologistFindUniqueArgs): Prisma.Prisma__PsychologistClient<{
        id: string;
        name: string;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(updateDto: Prisma.PsychologistUpdateArgs): Prisma.Prisma__PsychologistClient<{
        id: string;
        name: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    delete(deleteDto: Prisma.PsychologistDeleteArgs): Prisma.Prisma__PsychologistClient<{
        id: string;
        name: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
