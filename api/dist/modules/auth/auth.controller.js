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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const signin_1 = require("./dto/signin");
const IsPublic_1 = require("../../shared/decorators/IsPublic");
const IsResetPassword_1 = require("../../shared/decorators/IsResetPassword");
const ActiveUserId_1 = require("../../shared/decorators/ActiveUserId");
const reset_1 = require("./dto/reset");
const forget_1 = require("./dto/forget");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    signin(signinDTO) {
        const { email, password } = signinDTO;
        return this.authService.signin({ email, password });
    }
    forgetPassword(forgetDTO) {
        return this.authService.forgetPassword(forgetDTO);
    }
    resetPassword(userId, resetDTO) {
        return this.authService.resetPassword(userId, resetDTO);
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, IsPublic_1.IsPublic)(),
    (0, common_1.Post)('signin'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [signin_1.SigninDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "signin", null);
__decorate([
    (0, IsPublic_1.IsPublic)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    (0, common_1.Post)('forget'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [forget_1.ForgetDTO]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "forgetPassword", null);
__decorate([
    (0, IsResetPassword_1.IsResetPassword)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    (0, common_1.Put)('reset-password'),
    __param(0, (0, ActiveUserId_1.ActiveUserId)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, reset_1.ResetDTO]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "resetPassword", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map