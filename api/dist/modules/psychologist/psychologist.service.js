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
exports.PsychologistService = void 0;
const common_1 = require("@nestjs/common");
const psychologists_repositories_1 = require("../../shared/database/repositories/psychologists.repositories");
let PsychologistService = class PsychologistService {
    constructor(psychologistRepo) {
        this.psychologistRepo = psychologistRepo;
    }
    async create(createPsychologistDto) {
        const { name } = createPsychologistDto;
        const nameTaken = await this.psychologistRepo.findUnique({
            where: { name }
        });
        if (nameTaken) {
            throw new common_1.ConflictException('This name is already in use.');
        }
        return this.psychologistRepo.create({
            data: { name }
        });
    }
    async findAll() {
        return this.psychologistRepo.findMany({});
    }
    async findUnique(psychologistId) {
        return this.psychologistRepo.findUnique({
            where: { id: psychologistId }
        });
    }
    async update(psychologistId, updatePsychologistDto) {
        const { name } = updatePsychologistDto;
        return this.psychologistRepo.update({
            where: { id: psychologistId },
            data: { name }
        });
    }
    async remove(psychologistId) {
        await this.psychologistRepo.delete({
            where: { id: psychologistId }
        });
        return null;
    }
};
exports.PsychologistService = PsychologistService;
exports.PsychologistService = PsychologistService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [psychologists_repositories_1.PsychologistsRepository])
], PsychologistService);
//# sourceMappingURL=psychologist.service.js.map