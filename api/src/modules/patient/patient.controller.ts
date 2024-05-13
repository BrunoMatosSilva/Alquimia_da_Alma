import { Controller, Get, Post, Body, Param, Delete, ParseUUIDPipe, Put } from '@nestjs/common';
import { PatientService } from './patient.service';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';

@Controller('patient')
export class PatientController {
  constructor(private readonly patientService: PatientService) {}

  @Post()
  create(@Body() createPatientDto: CreatePatientDto) {
    return this.patientService.create(createPatientDto);
  }

  @Get()
  findAll() {
    return this.patientService.findAll();
  }

  @Get(':PatientId')
  findUnique(@Param('PatientId', ParseUUIDPipe) PatientId: string) {
    return this.patientService.findUnique(PatientId);
  }

  @Put(':PatientId')
  update(@Param('PatientId') PatientId: string, @Body() updatePatientDto: UpdatePatientDto) {
    return this.patientService.update(PatientId, updatePatientDto);
  }

  @Delete(':PatientId')
  remove(@Param('PatientId') PatientId: string) {
    return this.patientService.remove(PatientId);
  }
}
