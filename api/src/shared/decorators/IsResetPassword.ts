import { SetMetadata } from "@nestjs/common";

export const IS_RESET_PASSWORD = 'IS_RESET_PASSWORD';

export const IsResetPassword = () => SetMetadata(IS_RESET_PASSWORD, true)