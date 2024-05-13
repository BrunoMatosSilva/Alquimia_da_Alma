import { PrismaService } from "../prisma.service";
import { Prisma } from "@prisma/client";
export declare class PatientsRepository {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(createDto: Prisma.PatientCreateArgs): Prisma.Prisma__PatientClient<{
        id: string;
        name: string;
        dateOfBirth: Date;
        phone: string;
        zipCode: string;
        address: string;
        number: number;
        complement: string;
        neighborhood: string;
        city: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findMany(findManyDto: Prisma.PatientFindManyArgs): Prisma.PrismaPromise<{
        id: string;
        name: string;
        dateOfBirth: Date;
        phone: string;
        zipCode: string;
        address: string;
        number: number;
        complement: string;
        neighborhood: string;
        city: string;
    }[]>;
    findUnique(findUnique: Prisma.PatientFindUniqueArgs): Prisma.Prisma__PatientClient<{
        id: string;
        name: string;
        dateOfBirth: Date;
        phone: string;
        zipCode: string;
        address: string;
        number: number;
        complement: string;
        neighborhood: string;
        city: string;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(updateDto: Prisma.PatientUpdateArgs): Prisma.Prisma__PatientClient<{
        id: string;
        name: string;
        dateOfBirth: Date;
        phone: string;
        zipCode: string;
        address: string;
        number: number;
        complement: string;
        neighborhood: string;
        city: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    delete(deleteDto: Prisma.PatientDeleteArgs): Prisma.Prisma__PatientClient<{
        id: string;
        name: string;
        dateOfBirth: Date;
        phone: string;
        zipCode: string;
        address: string;
        number: number;
        complement: string;
        neighborhood: string;
        city: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
