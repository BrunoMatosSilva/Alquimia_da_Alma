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
exports.PatientsRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let PatientsRepository = class PatientsRepository {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    create(createDto) {
        return this.prismaService.patient.create(createDto);
    }
    findMany(findManyDto) {
        return this.prismaService.patient.findMany(findManyDto);
    }
    findUnique(findUnique) {
        return this.prismaService.patient.findUnique(findUnique);
    }
    count() {
        return this.prismaService.patient.count();
    }
    update(updateDto) {
        return this.prismaService.patient.update(updateDto);
    }
    delete(deleteDto) {
        return this.prismaService.patient.delete(deleteDto);
    }
};
exports.PatientsRepository = PatientsRepository;
exports.PatientsRepository = PatientsRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PatientsRepository);
//# sourceMappingURL=patients.repositories.js.map