import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { PatientsRepository } from 'src/shared/database/repositories/patients.repositories';
export declare class PatientService {
    private readonly patientsRepo;
    constructor(patientsRepo: PatientsRepository);
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
    findUnique(patientId: string): Promise<{
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
