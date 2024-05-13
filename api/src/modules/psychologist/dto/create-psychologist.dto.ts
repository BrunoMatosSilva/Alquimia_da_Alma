import { IsNotEmpty, IsString } from "class-validator";

export class CreatePsychologistDto {
  @IsString()
  @IsNotEmpty()
  name: string
}
