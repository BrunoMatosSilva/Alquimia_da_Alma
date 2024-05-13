import { IsNotEmpty, IsString, MinLength } from "class-validator";

export class ResetDTO {
  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  newPassword: string
}