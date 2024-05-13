import { IsDateString, IsNotEmpty, IsString } from "class-validator"

export class CreateAppointmentDto {
  @IsString()
  @IsNotEmpty()
  patientId: string

  @IsString()
  @IsNotEmpty()
  psychologistId: string

  @IsDateString()
  @IsNotEmpty()
  date: string

  @IsString()
  @IsNotEmpty()
  time: string
}
