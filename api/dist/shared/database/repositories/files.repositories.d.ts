import { Prisma } from "@prisma/client";
import { PrismaService } from "../prisma.service";
export declare class FilesRepository {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(createDto: Prisma.FileCreateArgs): Prisma.Prisma__FileClient<import("@prisma/client/runtime").GetResult<{
        id: string;
        patientId: string;
        originalFileName: string;
    }, unknown> & {}, never, import("@prisma/client/runtime").DefaultArgs>;
    findOne(findFirstDto: Prisma.FileFindFirstArgs): Prisma.Prisma__FileClient<import("@prisma/client/runtime").GetResult<{
        id: string;
        patientId: string;
        originalFileName: string;
    }, unknown> & {}, null, import("@prisma/client/runtime").DefaultArgs>;
    findAll(findAllDto: Prisma.FileFindManyArgs): Prisma.Prisma__FileClient<import("@prisma/client/runtime").GetResult<{
        id: string;
        patientId: string;
        originalFileName: string;
    }, unknown> & {}, never, import("@prisma/client/runtime").DefaultArgs>;
    update(updateDto: Prisma.FileUpdateArgs): Prisma.Prisma__FileClient<import("@prisma/client/runtime").GetResult<{
        id: string;
        patientId: string;
        originalFileName: string;
    }, unknown> & {}, never, import("@prisma/client/runtime").DefaultArgs>;
    delete(deleteDto: Prisma.FileDeleteArgs): Prisma.Prisma__FileClient<import("@prisma/client/runtime").GetResult<{
        id: string;
        patientId: string;
        originalFileName: string;
    }, unknown> & {}, never, import("@prisma/client/runtime").DefaultArgs>;
}
