import { Injectable, ServiceUnavailableException, UnauthorizedException } from '@nestjs/common';
import { SigninDto } from './dto/signin';
import { ResetDTO } from './dto/reset';
import { ForgetDTO } from './dto/forget';
import { UsersRepository } from 'src/shared/database/repositories/users.repositories';
import { compare, hash } from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { MailService } from '../mail/mail.service';
import { env } from 'src/shared/config/env';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersRepo: UsersRepository,
    private mailService: MailService,
    private readonly jwtService: JwtService,
  ) {}

  async signin(signinDto: SigninDto) {
    const { email, password } = signinDto;

    const user = await this.usersRepo.findUnique({
      where: { email }
    });

    if(!user){
      throw new UnauthorizedException('Invalid credentials.')
    }

    const isPasswordValid = await compare(password, user.password);

    if(!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials')
    }

    const accessToken = await this.generateAccessToken(user.id)

    return { accessToken }
  }

  async forgetPassword(forgetDTO: ForgetDTO) {
    const { email } = forgetDTO;

    const user = await this.usersRepo.findUnique({
      where: { email },
    })

    if (!user) {
      throw new UnauthorizedException('Invalid email.')
    }

    const resetToken = await this.generateResetPasswordToken(user.id)

    try {
      await this.mailService.send({
        to: email,
        subject: 'Recuperação de senha - AFetividade',
        msg: resetToken,
        isRecoverPass: true
      },)
    } catch {
      throw new ServiceUnavailableException('Error during email send.')
    }
  }

  async resetPassword(userId: string, resetDto: ResetDTO) {
    const { newPassword } = resetDto

    const hashedNewPassword = await hash(newPassword, 12)

    await this.usersRepo.update({
      where: { id: userId },
      data: { password: hashedNewPassword }
    })
  }

  private generateAccessToken(userId: string) {
    return this.jwtService.signAsync({ sub: userId})
  }

  private generateResetPasswordToken(userId: string) {
    return this.jwtService.signAsync(
      { sub: userId },
      { secret: env.resetPasswordJwtSecret, expiresIn: 300 })
  }
}
