import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class ForgetDTO {
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string
}