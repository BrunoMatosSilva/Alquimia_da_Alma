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
exports.FileService = void 0;
const common_1 = require("@nestjs/common");
const files_repositories_1 = require("../../shared/database/repositories/files.repositories");
const patients_repositories_1 = require("../../shared/database/repositories/patients.repositories");
const supabase_config_1 = require("./supabase-config");
let FileService = class FileService {
    constructor(fileRepo, patientRepo) {
        this.fileRepo = fileRepo;
        this.patientRepo = patientRepo;
    }
    async create(PatientId, createFileDto) {
        const existingFile = await this.fileRepo.findOne({
            where: {
                patientId: PatientId,
                originalFileName: createFileDto.originalname
            },
        });
        if (existingFile) {
            throw new common_1.BadRequestException('There is already exist file.');
        }
        const { data, error: uploadError } = await supabase_config_1.supabase.storage
            .from(`Patients/${PatientId}`)
            .upload(createFileDto.originalname, createFileDto.buffer, {
            upsert: true,
        });
        if (uploadError) {
            throw new common_1.ServiceUnavailableException('Error during file send');
        }
        const createFile = await this.fileRepo.create({
            data: {
                patientId: PatientId,
                originalFileName: createFileDto.originalname,
            },
        });
        return { createFile };
    }
    async findAll(PatientId) {
        return this.patientRepo.findUnique({
            where: { id: PatientId },
            include: {
                File: {
                    select: {
                        id: true,
                        patientId: true,
                        originalFileName: true
                    }
                }
            }
        });
    }
    async findOne(id, PatientId, originalFileName, res) {
        const { data, error: uploadError } = await supabase_config_1.supabase.storage
            .from(`Patients`)
            .download(`${PatientId}/${originalFileName}`);
        if (uploadError) {
            throw new common_1.ServiceUnavailableException('Error during file download');
        }
        if (!data) {
            throw new common_1.NotFoundException('File not found');
        }
        const buffer = await data.arrayBuffer();
        const fileBuffer = Buffer.from(buffer);
        res.setHeader('Content-Disposition', `attachment; filename="${originalFileName}"`);
        res.setHeader('Content-Type', 'application/octet-stream');
        res.send(fileBuffer);
    }
    async remove(id, PatientId, originalFileName) {
        const existingFile = await this.fileRepo.findOne({
            where: {
                id,
                patientId: PatientId,
                originalFileName,
            },
        });
        if (!existingFile) {
            throw new common_1.BadRequestException('Sorry, This Media File Does Not Exist');
        }
        const { data, error: uploadError } = await supabase_config_1.supabase.storage
            .from(`Patients`)
            .remove([`${PatientId}/${originalFileName}`]);
        if (uploadError) {
            throw new common_1.ServiceUnavailableException('Error during file remove');
        }
        await this.fileRepo.delete({
            where: { id }
        });
        return null;
    }
};
exports.FileService = FileService;
__decorate([
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, Object]),
    __metadata("design:returntype", Promise)
], FileService.prototype, "findOne", null);
exports.FileService = FileService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [files_repositories_1.FilesRepository,
        patients_repositories_1.PatientsRepository])
], FileService);
//# sourceMappingURL=file.service.js.map