import { Controller, Post, Put, Body, HttpCode, HttpStatus, Param, Delete, } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SigninDto } from './dto/signin';
import { IsPublic } from 'src/shared/decorators/IsPublic';
import { IsResetPassword } from 'src/shared/decorators/IsResetPassword';
import { ActiveUserId } from 'src/shared/decorators/ActiveUserId';
import { ResetDTO } from './dto/reset';
import { ForgetDTO } from './dto/forget';
import { CreateUserDto } from './dto/create';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
  ) {}

  @IsPublic()
  @Post('signin')
  signin(@Body() signinDTO: SigninDto) {
    const { email, password } = signinDTO
    return this.authService.signin({email, password});
  }

  @IsPublic()
  @Post('create')
  create(@Body() createDTO: CreateUserDto) {
    return this.authService.create(createDTO);
  }

  @IsPublic()
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authService.remove(id);
  }

  @IsPublic()
  @HttpCode(HttpStatus.NO_CONTENT)
  @Post('forget-password')
  forgetPassword(@Body() forgetDTO: ForgetDTO) {
    return this.authService.forgetPassword(forgetDTO);
  }

  @IsResetPassword()
  @HttpCode(HttpStatus.NO_CONTENT)
  @Put('reset-password')
  resetPassword(@ActiveUserId() userId:string, @Body() resetDTO: ResetDTO) {
    return this.authService.resetPassword(userId, resetDTO);
  }
}
