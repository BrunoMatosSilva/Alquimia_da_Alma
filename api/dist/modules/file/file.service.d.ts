import { CreateFileDto } from './dto/create-file.dto';
import { FilesRepository } from 'src/shared/database/repositories/files.repositories';
import { PatientsRepository } from 'src/shared/database/repositories/patients.repositories';
import { Response } from 'express';
export declare class FileService {
    private readonly fileRepo;
    private readonly patientRepo;
    constructor(fileRepo: FilesRepository, patientRepo: PatientsRepository);
    create(PatientId: string, createFileDto: CreateFileDto): Promise<{
        createFile: {
            id: string;
            patientId: string;
            originalFileName: string;
        };
    }>;
    findAll(PatientId: string): Promise<{
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
    findOne(id: string, PatientId: string, originalFileName: string, res: Response): Promise<void>;
    remove(id: string, PatientId: string, originalFileName: string): Promise<any>;
}
