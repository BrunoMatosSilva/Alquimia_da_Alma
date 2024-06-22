import { PatientService } from './patient.service';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
export declare class PatientController {
    private readonly patientService;
    constructor(patientService: PatientService);
    create(createPatientDto: CreatePatientDto): Promise<import("@prisma/client/runtime").GetResult<{
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
    }, unknown> & {}>;
    findAll(pageIndex: string, pageSize: string): Promise<{
        items: number;
        patients: (import("@prisma/client/runtime").GetResult<{
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
        }, unknown> & {})[];
        allPatients: (import("@prisma/client/runtime").GetResult<{
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
        }, unknown> & {})[];
    }>;
    searchByName(name: string): Promise<(import("@prisma/client/runtime").GetResult<{
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
    findUnique(PatientId: string): Promise<import("@prisma/client/runtime").GetResult<{
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
    }, unknown> & {}>;
    update(PatientId: string, updatePatientDto: UpdatePatientDto): Promise<import("@prisma/client/runtime").GetResult<{
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
    }, unknown> & {}>;
    remove(PatientId: string): Promise<any>;
}
