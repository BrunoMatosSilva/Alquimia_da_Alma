import { Controller, Get, Post, Body, Param, Delete, Put, Query, ParseIntPipe, Optional } from '@nestjs/common';
import { OptionalParseUUIDPipe } from 'src/shared/pipes/OptionalParseUUIDPipe';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';
import { AppointmentService } from './appointment.service';

@Controller('appointment')
export class AppointmentController {
  constructor(private readonly appointmentService: AppointmentService) {}

  @Post()
  create(@Body() createAppoitmentDto: CreateAppointmentDto) {
    return this.appointmentService.create(createAppoitmentDto);
  }

  @Get()
  findAll(
    @Query('day', ParseIntPipe) day: number,
    @Query('month', ParseIntPipe) month: number,
    @Query('year', ParseIntPipe) year: number,
    @Query('psychologistId', OptionalParseUUIDPipe) psychologistId?: string,
  ) {
    return this.appointmentService.findAll({day, month, year, psychologistId});
  }

  @Get(':AppointmentId')
  findOne(@Param('AppointmentId') AppointmentId: string) {
    return this.appointmentService.findOne(AppointmentId);
  }

  @Put(':AppointmentId')
  update(@Param('AppointmentId') AppointmentId: string, @Body() updateAppointmentDto: UpdateAppointmentDto) {
    return this.appointmentService.update(AppointmentId, updateAppointmentDto);
  }

  @Delete(':AppointmentId')
  remove(@Param('AppointmentId') AppointmentId: string) {
    return this.appointmentService.remove(AppointmentId);
  }
}
