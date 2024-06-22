import { CreateFileDto } from './dto/create-file.dto';
import { FilesRepository } from 'src/shared/database/repositories/files.repositories';
import { PatientsRepository } from 'src/shared/database/repositories/patients.repositories';
import { Response } from 'express';
export declare class FileService {
    private readonly fileRepo;
    private readonly patientRepo;
    constructor(fileRepo: FilesRepository, patientRepo: PatientsRepository);
    create(PatientId: string, createFileDto: CreateFileDto): Promise<{
        createFile: import("@prisma/client/runtime").GetResult<{
            id: string;
            patientId: string;
            originalFileName: string;
        }, unknown> & {};
    }>;
    findAll(PatientId: string): Promise<import("@prisma/client/runtime").GetResult<{
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
    findOne(id: string, PatientId: string, originalFileName: string, res: Response): Promise<void>;
    remove(id: string, PatientId: string, originalFileName: string): Promise<any>;
}
