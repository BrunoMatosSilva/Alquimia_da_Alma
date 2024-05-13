import { IsDateString, IsNotEmpty, IsNumber, IsString } from "class-validator"

export class CreatePatientDto {
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

  @IsNumber()
  @IsNotEmpty()
  number: number

  @IsString()
  complement: string

  @IsString()
  @IsNotEmpty()
  neighborhood: string

  @IsString()
  @IsNotEmpty()
  city: string
}
