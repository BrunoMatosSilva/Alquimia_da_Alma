import { PatientService } from './patient.service';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
export declare class PatientController {
    private readonly patientService;
    constructor(patientService: PatientService);
    create(createPatientDto: CreatePatientDto): Promise<{
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
    }>;
    findAll(): Promise<{
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
    findUnique(PatientId: string): Promise<{
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
    }>;
    update(PatientId: string, updatePatientDto: UpdatePatientDto): Promise<{
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
    }>;
    remove(PatientId: string): Promise<any>;
}
