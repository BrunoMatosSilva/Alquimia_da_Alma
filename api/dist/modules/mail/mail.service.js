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
exports.MailService = void 0;
const mailer_1 = require("@nestjs-modules/mailer");
const common_1 = require("@nestjs/common");
const env_1 = require("../../shared/config/env");
let MailService = class MailService {
    constructor(mailerService) {
        this.mailerService = mailerService;
    }
    send({ to, msg, subject, isRecoverPass }) {
        return this.mailerService.sendMail({
            to,
            from: 'brunomatossilvait@gmail.com',
            subject,
            html: isRecoverPass
                ? this.generateRecoverPasswordTemplateHtml({ email: to, token: msg })
                : msg,
        });
    }
    generateRecoverPasswordTemplateHtml({ email, token }) {
        return `
      <p>Olá, ${email}.</p>
      <p>Aqui está o seu link para recuperação de senha:</p>
      <p>${env_1.env.frontendUrl}/#/reset-password?t=${token}</p>
      <p>(Este link expira em 5 minutos)</p>
    `;
    }
};
exports.MailService = MailService;
exports.MailService = MailService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [mailer_1.MailerService])
], MailService);
//# sourceMappingURL=mail.service.js.map