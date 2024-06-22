import { CreatePsychologistDto } from './dto/create-psychologist.dto';
import { UpdatePsychologistDto } from './dto/update-psychologist.dto';
import { PsychologistsRepository } from 'src/shared/database/repositories/psychologists.repositories';
export declare class PsychologistService {
    private readonly psychologistRepo;
    constructor(psychologistRepo: PsychologistsRepository);
    create(createPsychologistDto: CreatePsychologistDto): Promise<import("@prisma/client/runtime").GetResult<{
        id: string;
        name: string;
    }, unknown> & {}>;
    findAll(): Promise<(import("@prisma/client/runtime").GetResult<{
        id: string;
        name: string;
    }, unknown> & {})[]>;
    findUnique(psychologistId: string): Promise<import("@prisma/client/runtime").GetResult<{
        id: string;
        name: string;
    }, unknown> & {}>;
    update(psychologistId: string, updatePsychologistDto: UpdatePsychologistDto): Promise<import("@prisma/client/runtime").GetResult<{
        id: string;
        name: string;
    }, unknown> & {}>;
    remove(psychologistId: string): Promise<any>;
}
