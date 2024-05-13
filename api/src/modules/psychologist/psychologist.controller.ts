import { Controller, Get, Post, Body, Patch, Param, Delete, Put, ParseUUIDPipe } from '@nestjs/common';
import { PsychologistService } from './psychologist.service';
import { CreatePsychologistDto } from './dto/create-psychologist.dto';
import { UpdatePsychologistDto } from './dto/update-psychologist.dto';

@Controller('psychologist')
export class PsychologistController {
  constructor(private readonly psychologistService: PsychologistService) {}

  @Post()
  create(@Body() createPsychologistDto: CreatePsychologistDto) {
    return this.psychologistService.create(createPsychologistDto);
  }

  @Get()
  findAll() {
    return this.psychologistService.findAll();
  }

  @Get(':PsychologistId')
  findUnique(@Param('PsychologistId', ParseUUIDPipe) PsychologistId: string) {
    return this.psychologistService.findUnique(PsychologistId)
  }

  @Put(':PsychologistId')
  update(@Param('PsychologistId', ParseUUIDPipe) PsychologistId: string, @Body() updatePsychologistDto: UpdatePsychologistDto) {
    return this.psychologistService.update(PsychologistId, updatePsychologistDto);
  }

  @Delete(':PsychologistId')
  remove(@Param('PsychologistId') PsychologistId: string) {
    return this.psychologistService.remove(PsychologistId);
  }
}
