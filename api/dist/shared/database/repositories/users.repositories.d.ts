import { type Prisma } from "@prisma/client";
import { PrismaService } from "../prisma.service";
export declare class UsersRepository {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(createDto: Prisma.UserCreateArgs): Prisma.Prisma__UserClient<import("@prisma/client/runtime").GetResult<{
        id: string;
        name: string;
        email: string;
        password: string;
    }, unknown> & {}, never, import("@prisma/client/runtime").DefaultArgs>;
    findUnique(findUnique: Prisma.UserFindUniqueArgs): Prisma.Prisma__UserClient<import("@prisma/client/runtime").GetResult<{
        id: string;
        name: string;
        email: string;
        password: string;
    }, unknown> & {}, null, import("@prisma/client/runtime").DefaultArgs>;
    update(updateDto: Prisma.UserUpdateArgs): Prisma.Prisma__UserClient<import("@prisma/client/runtime").GetResult<{
        id: string;
        name: string;
        email: string;
        password: string;
    }, unknown> & {}, never, import("@prisma/client/runtime").DefaultArgs>;
    delete(deleteDto: Prisma.UserDeleteArgs): Prisma.Prisma__UserClient<import("@prisma/client/runtime").GetResult<{
        id: string;
        name: string;
        email: string;
        password: string;
    }, unknown> & {}, never, import("@prisma/client/runtime").DefaultArgs>;
}
