import { FileService } from './file.service';
import { CreateFileDto } from './dto/create-file.dto';
import { Response } from 'express';
export declare class FileController {
    private readonly fileService;
    constructor(fileService: FileService);
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
