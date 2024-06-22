import { PartialType } from '@nestjs/mapped-types';
import { CreatePatientDto } from './create-patient.dto';
import { IsDateString, IsNotEmpty, IsNumber, IsString } from "class-validator"

export class UpdatePatientDto extends PartialType(CreatePatientDto) {
  @IsString()
  @IsNotEmpty()
  name: string

  @IsDateString()
  @IsNotEmpty()
  dateOfBirth: string

  @IsString()
  @IsNotEmpty()
  phone: string

  @IsString()
  @IsNotEmpty()
  zipCode: string

  @IsString()
  @IsNotEmpty()
  address: string

  @IsString()
  @IsNotEmpty()
  number: string

  @IsString()
  complement: string

  @IsString()
  @IsNotEmpty()
  neighborhood: string

  @IsString()
  @IsNotEmpty()
  city: string
}
