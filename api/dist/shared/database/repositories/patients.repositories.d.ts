import { PrismaService } from "../prisma.service";
import { Prisma } from "@prisma/client";
export declare class PatientsRepository {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(createDto: Prisma.PatientCreateArgs): Prisma.Prisma__PatientClient<import("@prisma/client/runtime").GetResult<{
        id: string;
        name: string;
        dateOfBirth: Date;
        phone: string;
        zipCode: string;
        address: string;
        number: string;
        complement: string;
        neighborhood: string;
        city: string;
    }, unknown> & {}, never, import("@prisma/client/runtime").DefaultArgs>;
    findMany(findManyDto: Prisma.PatientFindManyArgs): Prisma.PrismaPromise<(import("@prisma/client/runtime").GetResult<{
        id: string;
        name: string;
        dateOfBirth: Date;
        phone: string;
        zipCode: string;
        address: string;
        number: string;
        complement: string;
        neighborhood: string;
        city: string;
    }, unknown> & {})[]>;
    findUnique(findUnique: Prisma.PatientFindUniqueArgs): Prisma.Prisma__PatientClient<import("@prisma/client/runtime").GetResult<{
        id: string;
        name: string;
        dateOfBirth: Date;
        phone: string;
        zipCode: string;
        address: string;
        number: string;
        complement: string;
        neighborhood: string;
        city: string;
    }, unknown> & {}, null, import("@prisma/client/runtime").DefaultArgs>;
    count(): Prisma.PrismaPromise<number>;
    update(updateDto: Prisma.PatientUpdateArgs): Prisma.Prisma__PatientClient<import("@prisma/client/runtime").GetResult<{
        id: string;
        name: string;
        dateOfBirth: Date;
        phone: string;
        zipCode: string;
        address: string;
        number: string;
        complement: string;
        neighborhood: string;
        city: string;
    }, unknown> & {}, never, import("@prisma/client/runtime").DefaultArgs>;
    delete(deleteDto: Prisma.PatientDeleteArgs): Prisma.Prisma__PatientClient<import("@prisma/client/runtime").GetResult<{
        id: string;
        name: string;
        dateOfBirth: Date;
        phone: string;
        zipCode: string;
        address: string;
        number: string;
        complement: string;
        neighborhood: string;
        city: string;
    }, unknown> & {}, never, import("@prisma/client/runtime").DefaultArgs>;
}
