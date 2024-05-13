"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseModule = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("./prisma.service");
const users_repositories_1 = require("./repositories/users.repositories");
const psychologists_repositories_1 = require("./repositories/psychologists.repositories");
const patients_repositories_1 = require("./repositories/patients.repositories");
const appointments_repositories_1 = require("./repositories/appointments.repositories");
const files_repositories_1 = require("./repositories/files.repositories");
let DatabaseModule = class DatabaseModule {
};
exports.DatabaseModule = DatabaseModule;
exports.DatabaseModule = DatabaseModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        providers: [prisma_service_1.PrismaService, users_repositories_1.UsersRepository, psychologists_repositories_1.PsychologistsRepository, patients_repositories_1.PatientsRepository, appointments_repositories_1.AppointmentsRepository, files_repositories_1.FilesRepository],
        exports: [users_repositories_1.UsersRepository, psychologists_repositories_1.PsychologistsRepository, patients_repositories_1.PatientsRepository, appointments_repositories_1.AppointmentsRepository, files_repositories_1.FilesRepository]
    })
], DatabaseModule);
//# sourceMappingURL=database.module.js.map