import { AuthService } from './auth.service';
import { SigninDto } from './dto/signin';
import { ResetDTO } from './dto/reset';
import { ForgetDTO } from './dto/forget';
import { CreateUserDto } from './dto/create';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signin(signinDTO: SigninDto): Promise<{
        accessToken: string;
    }>;
    create(createDTO: CreateUserDto): Promise<{
        accessToken: string;
    }>;
    remove(id: string): Promise<any>;
    forgetPassword(forgetDTO: ForgetDTO): Promise<void>;
    resetPassword(userId: string, resetDTO: ResetDTO): Promise<void>;
}
