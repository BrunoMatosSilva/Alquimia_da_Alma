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
exports.PatientService = void 0;
const common_1 = require("@nestjs/common");
const patients_repositories_1 = require("../../shared/database/repositories/patients.repositories");
let PatientService = class PatientService {
    constructor(patientsRepo) {
        this.patientsRepo = patientsRepo;
    }
    async create(createPatientDto) {
        const { name, phone, dateOfBirth, zipCode, address, number, complement, neighborhood, city } = createPatientDto;
        const nameTaken = await this.patientsRepo.findUnique({
            where: { name }
        });
        if (nameTaken) {
            throw new common_1.ConflictException('This name is already in use.');
        }
        const patient = await this.patientsRepo.create({
            data: {
                name,
                dateOfBirth,
                phone,
                zipCode,
                address,
                number,
                complement,
                neighborhood,
                city
            }
        });
        return patient;
    }
    async findAll() {
        return await this.patientsRepo.findMany({});
    }
    async findUnique(patientId) {
        return this.patientsRepo.findUnique({
            where: { id: patientId }
        });
    }
    async update(PatientId, updatePatientDto) {
        const { name, dateOfBirth, phone, zipCode, address, number, complement, neighborhood, city } = updatePatientDto;
        return this.patientsRepo.update({
            where: { id: PatientId },
            data: {
                name,
                dateOfBirth,
                phone,
                zipCode,
                address,
                number,
                complement,
                neighborhood,
                city
            }
        });
    }
    async remove(PatientId) {
        const user = await this.patientsRepo.delete({
            where: { id: PatientId }
        });
        return null;
    }
};
exports.PatientService = PatientService;
exports.PatientService = PatientService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [patients_repositories_1.PatientsRepository])
], PatientService);
//# sourceMappingURL=patient.service.js.map