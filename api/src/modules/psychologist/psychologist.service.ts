import { ConflictException, Injectable } from '@nestjs/common';
import { CreatePsychologistDto } from './dto/create-psychologist.dto';
import { UpdatePsychologistDto } from './dto/update-psychologist.dto';
import { PsychologistsRepository } from 'src/shared/database/repositories/psychologists.repositories';

@Injectable()
export class PsychologistService {
  constructor(private readonly psychologistRepo: PsychologistsRepository){}

  async create(createPsychologistDto: CreatePsychologistDto) {
    const { name } = createPsychologistDto;

    const nameTaken = await this.psychologistRepo.findUnique({
      where: { name }
    })

    if (nameTaken) {
      throw new ConflictException('This name is already in use.');
    }

    return this.psychologistRepo.create({
      data: { name }
    });
  }

  async findAll() {
    return this.psychologistRepo.findMany({});
  }

  async findUnique(psychologistId: string) {
    return this.psychologistRepo.findUnique({
      where: { id: psychologistId}
    });
  }

  async update(psychologistId: string, updatePsychologistDto: UpdatePsychologistDto) {
    const { name } = updatePsychologistDto;
    
    return this.psychologistRepo.update({
      where: { id: psychologistId },
      data: { name }
    });
  }

  async remove(psychologistId: string) {
    await this.psychologistRepo.delete({ 
      where: {id: psychologistId}
    });

    return null;
  }
}
