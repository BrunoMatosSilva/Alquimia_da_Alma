import { PrismaService } from "../prisma.service";
import { Prisma } from "@prisma/client";
export declare class PsychologistsRepository {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(createDto: Prisma.PsychologistCreateArgs): Prisma.Prisma__PsychologistClient<import("@prisma/client/runtime").GetResult<{
        id: string;
        name: string;
    }, unknown> & {}, never, import("@prisma/client/runtime").DefaultArgs>;
    findMany(findManyDto: Prisma.PsychologistFindManyArgs): Prisma.PrismaPromise<(import("@prisma/client/runtime").GetResult<{
        id: string;
        name: string;
    }, unknown> & {})[]>;
    findUnique(findUnique: Prisma.PsychologistFindUniqueArgs): Prisma.Prisma__PsychologistClient<import("@prisma/client/runtime").GetResult<{
        id: string;
        name: string;
    }, unknown> & {}, null, import("@prisma/client/runtime").DefaultArgs>;
    update(updateDto: Prisma.PsychologistUpdateArgs): Prisma.Prisma__PsychologistClient<import("@prisma/client/runtime").GetResult<{
        id: string;
        name: string;
    }, unknown> & {}, never, import("@prisma/client/runtime").DefaultArgs>;
    delete(deleteDto: Prisma.PsychologistDeleteArgs): Prisma.Prisma__PsychologistClient<import("@prisma/client/runtime").GetResult<{
        id: string;
        name: string;
    }, unknown> & {}, never, import("@prisma/client/runtime").DefaultArgs>;
}
