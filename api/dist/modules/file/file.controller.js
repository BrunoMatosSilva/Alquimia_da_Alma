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
exports.FileController = void 0;
const common_1 = require("@nestjs/common");
const file_service_1 = require("./file.service");
const create_file_dto_1 = require("./dto/create-file.dto");
const platform_express_1 = require("@nestjs/platform-express");
const OptionalParseUUIDPipe_1 = require("../../shared/pipes/OptionalParseUUIDPipe");
const IsPublic_1 = require("../../shared/decorators/IsPublic");
let FileController = class FileController {
    constructor(fileService) {
        this.fileService = fileService;
    }
    create(PatientId, createFileDto) {
        return this.fileService.create(PatientId, createFileDto);
    }
    findAll(PatientId) {
        return this.fileService.findAll(PatientId);
    }
    findOne(id, PatientId, originalFileName, res) {
        return this.fileService.findOne(id, PatientId, originalFileName, res);
    }
    remove(id, PatientId, originalFileName) {
        return this.fileService.remove(id, PatientId, originalFileName);
    }
};
exports.FileController = FileController;
__decorate([
    (0, common_1.Post)(':PatientId'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.Param)('PatientId')),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_file_dto_1.CreateFileDto]),
    __metadata("design:returntype", void 0)
], FileController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(':PatientId'),
    __param(0, (0, common_1.Param)('PatientId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FileController.prototype, "findAll", null);
__decorate([
    (0, IsPublic_1.IsPublic)(),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('id', OptionalParseUUIDPipe_1.OptionalParseUUIDPipe)),
    __param(1, (0, common_1.Query)('PatientId', OptionalParseUUIDPipe_1.OptionalParseUUIDPipe)),
    __param(2, (0, common_1.Query)('OriginalFileName')),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, Object]),
    __metadata("design:returntype", void 0)
], FileController.prototype, "findOne", null);
__decorate([
    (0, common_1.Delete)(),
    __param(0, (0, common_1.Query)('id', OptionalParseUUIDPipe_1.OptionalParseUUIDPipe)),
    __param(1, (0, common_1.Query)('PatientId', OptionalParseUUIDPipe_1.OptionalParseUUIDPipe)),
    __param(2, (0, common_1.Query)('OriginalFileName')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", void 0)
], FileController.prototype, "remove", null);
exports.FileController = FileController = __decorate([
    (0, common_1.Controller)('file'),
    __metadata("design:paramtypes", [file_service_1.FileService])
], FileController);
//# sourceMappingURL=file.controller.js.map