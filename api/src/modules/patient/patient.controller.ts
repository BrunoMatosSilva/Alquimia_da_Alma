import { Controller, Get, Post, Body, Param, Delete, ParseUUIDPipe, Put, Query, Optional } from '@nestjs/common';
import { PatientService } from './patient.service';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { OptionalParseEnumPipe } from 'src/shared/pipes/OptionalParseEnumPipe';

@Controller('patient')
export class PatientController {
  constructor(private readonly patientService: PatientService) {}

  @Post()
  create(@Body() createPatientDto: CreatePatientDto) {
    return this.patientService.create(createPatientDto);
  }

  @Get()
  findAll(
    @Query('pageIndex') pageIndex: string,
    @Query('pageSize') pageSize: string,
  ) {
    return this.patientService.findAll(pageIndex, pageSize);
  }

  @Get('search')
  searchByName(
    @Query('name') name: string,
  ) {
    return this.patientService.searchByName(name);
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
