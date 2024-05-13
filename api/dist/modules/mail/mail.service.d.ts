import { MailerService } from '@nestjs-modules/mailer';
interface SendParams {
    to: string;
    msg: string;
    subject: string;
    isRecoverPass?: boolean;
}
export declare class MailService {
    private mailerService;
    constructor(mailerService: MailerService);
    send({ to, msg, subject, isRecoverPass }: SendParams): Promise<SentMessageInfo>;
    private generateRecoverPasswordTemplateHtml;
}
export {};
