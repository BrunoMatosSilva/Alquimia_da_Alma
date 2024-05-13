import { Prisma } from "@prisma/client";
import { PrismaService } from "../prisma.service";
export declare class FilesRepository {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(createDto: Prisma.FileCreateArgs): Prisma.Prisma__FileClient<{
        id: string;
        patientId: string;
        originalFileName: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findOne(findFirstDto: Prisma.FileFindFirstArgs): Prisma.Prisma__FileClient<{
        id: string;
        patientId: string;
        originalFileName: string;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(findAllDto: Prisma.FileFindManyArgs): Prisma.Prisma__FileClient<{
        id: string;
        patientId: string;
        originalFileName: string;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(updateDto: Prisma.FileUpdateArgs): Prisma.Prisma__FileClient<{
        id: string;
        patientId: string;
        originalFileName: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    delete(deleteDto: Prisma.FileDeleteArgs): Prisma.Prisma__FileClient<{
        id: string;
        patientId: string;
        originalFileName: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
