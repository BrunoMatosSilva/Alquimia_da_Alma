import { Controller, Post, Put, Body, HttpCode, HttpStatus, } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SigninDto } from './dto/signin';
import { IsPublic } from 'src/shared/decorators/IsPublic';
import { IsResetPassword } from 'src/shared/decorators/IsResetPassword';
import { ActiveUserId } from 'src/shared/decorators/ActiveUserId';
import { ResetDTO } from './dto/reset';
import { ForgetDTO } from './dto/forget';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @IsPublic()
  @Post('signin')
  signin(@Body() signinDTO: SigninDto) {
    const { email, password } = signinDTO
    return this.authService.signin({email, password});
  }

  @IsPublic()
  @HttpCode(HttpStatus.NO_CONTENT)
  @Post('forget')
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
