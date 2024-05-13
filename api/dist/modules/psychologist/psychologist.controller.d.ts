import { PsychologistService } from './psychologist.service';
import { CreatePsychologistDto } from './dto/create-psychologist.dto';
import { UpdatePsychologistDto } from './dto/update-psychologist.dto';
export declare class PsychologistController {
    private readonly psychologistService;
    constructor(psychologistService: PsychologistService);
    create(createPsychologistDto: CreatePsychologistDto): Promise<{
        id: string;
        name: string;
    }>;
    findAll(): Promise<{
        id: string;
        name: string;
    }[]>;
    findUnique(PsychologistId: string): Promise<{
        id: string;
        name: string;
    }>;
    update(PsychologistId: string, updatePsychologistDto: UpdatePsychologistDto): Promise<{
        id: string;
        name: string;
    }>;
    remove(PsychologistId: string): Promise<any>;
}
