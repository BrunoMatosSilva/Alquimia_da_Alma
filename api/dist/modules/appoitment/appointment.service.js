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
exports.AppointmentService = void 0;
const common_1 = require("@nestjs/common");
const appointments_repositories_1 = require("../../shared/database/repositories/appointments.repositories");
let AppointmentService = class AppointmentService {
    constructor(appointmentsRepo) {
        this.appointmentsRepo = appointmentsRepo;
    }
    async create(createAppointmentDto) {
        const { patientId, psychologistId, date, time } = createAppointmentDto;
        const existingPsychologistAppointment = await this.appointmentsRepo.findOne({
            where: {
                psychologistId,
                date,
                time,
            },
        });
        if (existingPsychologistAppointment) {
            throw new common_1.BadRequestException('The psychologist already has an appointment scheduled at this time.');
        }
        const conflictingPatientAppointment = await this.appointmentsRepo.findOne({
            where: {
                patientId,
                date,
                time,
            },
        });
        if (conflictingPatientAppointment) {
            throw new common_1.BadRequestException('The patient already has an appointment scheduled at this time.');
        }
        return this.appointmentsRepo.create({
            data: {
                patientId,
                psychologistId,
                date,
                time,
            },
        });
    }
    async findAll(filters) {
        return this.appointmentsRepo.findMany({
            where: {
                psychologistId: filters.psychologistId,
                date: {
                    gte: new Date(Date.UTC(filters.year, filters.month - 1, filters.day)),
                    lte: new Date(Date.UTC(filters.year, filters.month - 1, filters.day + 1)),
                }
            },
            orderBy: {
                time: 'asc'
            },
            include: {
                patient: {
                    select: {
                        id: true,
                        name: true,
                    }
                },
                psychologist: {
                    select: {
                        id: true,
                        name: true,
                    }
                }
            }
        });
    }
    async findOne(AppointmentId) {
        return this.appointmentsRepo.findUnique({
            where: { id: AppointmentId },
            include: {
                patient: {
                    select: {
                        id: true,
                        name: true,
                    }
                },
                psychologist: {
                    select: {
                        id: true,
                        name: true,
                    }
                }
            }
        });
    }
    async update(AppointmentId, updateAppointmentDto) {
        const { patientId, psychologistId, date, time } = updateAppointmentDto;
        return this.appointmentsRepo.update({
            where: { id: AppointmentId },
            data: {
                patientId,
                psychologistId,
                date,
                time
            }
        });
    }
    async remove(AppointmentId) {
        await this.appointmentsRepo.delete({
            where: { id: AppointmentId }
        });
        return null;
    }
};
exports.AppointmentService = AppointmentService;
exports.AppointmentService = AppointmentService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [appointments_repositories_1.AppointmentsRepository])
], AppointmentService);
//# sourceMappingURL=appointment.service.js.map