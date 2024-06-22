import { PsychologistService } from './psychologist.service';
import { CreatePsychologistDto } from './dto/create-psychologist.dto';
import { UpdatePsychologistDto } from './dto/update-psychologist.dto';
export declare class PsychologistController {
    private readonly psychologistService;
    constructor(psychologistService: PsychologistService);
    create(createPsychologistDto: CreatePsychologistDto): Promise<import("@prisma/client/runtime").GetResult<{
        id: string;
        name: string;
    }, unknown> & {}>;
    findAll(): Promise<(import("@prisma/client/runtime").GetResult<{
        id: string;
        name: string;
    }, unknown> & {})[]>;
    findUnique(PsychologistId: string): Promise<import("@prisma/client/runtime").GetResult<{
        id: string;
        name: string;
    }, unknown> & {}>;
    update(PsychologistId: string, updatePsychologistDto: UpdatePsychologistDto): Promise<import("@prisma/client/runtime").GetResult<{
        id: string;
        name: string;
    }, unknown> & {}>;
    remove(PsychologistId: string): Promise<any>;
}
