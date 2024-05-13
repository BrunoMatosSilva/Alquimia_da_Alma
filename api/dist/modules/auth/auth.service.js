"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const users_repositories_1 = require("../../shared/database/repositories/users.repositories");
const bcryptjs_1 = require("bcryptjs");
const jwt_1 = require("@nestjs/jwt");
const mail_service_1 = require("../mail/mail.service");
const env_1 = require("../../shared/config/env");
let AuthService = class AuthService {
    constructor(usersRepo, mailService, jwtService) {
        this.usersRepo = usersRepo;
        this.mailService = mailService;
        this.jwtService = jwtService;
    }
    async signin(signinDto) {
        const { email, password } = signinDto;
        const user = await this.usersRepo.findUnique({
            where: { email }
        });
        if (!user) {
            throw new common_1.UnauthorizedException('Invalid credentials.');
        }
        const isPasswordValid = await (0, bcryptjs_1.compare)(password, user.password);
        if (!isPasswordValid) {
            throw new common_1.UnauthorizedException('Invalid credentials');
        }
        const accessToken = await this.generateAccessToken(user.id);
        return { accessToken };
    }
    async forgetPassword(forgetDTO) {
        const { email } = forgetDTO;
        const user = await this.usersRepo.findUnique({
            where: { email },
        });
        if (!user) {
            throw new common_1.UnauthorizedException('Invalid email.');
        }
        const resetToken = await this.generateResetPasswordToken(user.id);
        try {
            await this.mailService.send({
                to: email,
                subject: 'Recuperação de senha - AFetividade',
                msg: resetToken,
                isRecoverPass: true
            });
        }
        catch {
            throw new common_1.ServiceUnavailableException('Error during email send.');
        }
    }
    async resetPassword(userId, resetDto) {
        const { newPassword } = resetDto;
        const hashedNewPassword = await (0, bcryptjs_1.hash)(newPassword, 12);
        await this.usersRepo.update({
            where: { id: userId },
            data: { password: hashedNewPassword }
        });
    }
    generateAccessToken(userId) {
        return this.jwtService.signAsync({ sub: userId });
    }
    generateResetPasswordToken(userId) {
        return this.jwtService.signAsync({ sub: userId }, { secret: env_1.env.resetPasswordJwtSecret, expiresIn: 300 });
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_repositories_1.UsersRepository,
        mail_service_1.MailService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map