declare class Env {
    dbURL: string;
    jwtSecret: string;
    resetPasswordJwtSecret: string;
    emailUser: string;
    emailPassword: string;
    frontendUrl: string;
}
export declare const env: Env;
export {};
