import { CreatePsychologistDto } from './dto/create-psychologist.dto';
import { UpdatePsychologistDto } from './dto/update-psychologist.dto';
import { PsychologistsRepository } from 'src/shared/database/repositories/psychologists.repositories';
export declare class PsychologistService {
    private readonly psychologistRepo;
    constructor(psychologistRepo: PsychologistsRepository);
    create(createPsychologistDto: CreatePsychologistDto): Promise<{
        id: string;
        name: string;
    }>;
    findAll(): Promise<{
        id: string;
        name: string;
    }[]>;
    findUnique(psychologistId: string): Promise<{
        id: string;
        name: string;
    }>;
    update(psychologistId: string, updatePsychologistDto: UpdatePsychologistDto): Promise<{
        id: string;
        name: string;
    }>;
    remove(psychologistId: string): Promise<any>;
}
