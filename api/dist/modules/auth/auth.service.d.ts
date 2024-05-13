import { SigninDto } from './dto/signin';
import { ResetDTO } from './dto/reset';
import { ForgetDTO } from './dto/forget';
import { UsersRepository } from 'src/shared/database/repositories/users.repositories';
import { JwtService } from '@nestjs/jwt';
import { MailService } from '../mail/mail.service';
export declare class AuthService {
    private readonly usersRepo;
    private mailService;
    private readonly jwtService;
    constructor(usersRepo: UsersRepository, mailService: MailService, jwtService: JwtService);
    signin(signinDto: SigninDto): Promise<{
        accessToken: string;
    }>;
    forgetPassword(forgetDTO: ForgetDTO): Promise<void>;
    resetPassword(userId: string, resetDto: ResetDTO): Promise<void>;
    private generateAccessToken;
    private generateResetPasswordToken;
}
