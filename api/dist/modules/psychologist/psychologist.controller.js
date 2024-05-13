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
exports.PsychologistController = void 0;
const common_1 = require("@nestjs/common");
const psychologist_service_1 = require("./psychologist.service");
const create_psychologist_dto_1 = require("./dto/create-psychologist.dto");
const update_psychologist_dto_1 = require("./dto/update-psychologist.dto");
let PsychologistController = class PsychologistController {
    constructor(psychologistService) {
        this.psychologistService = psychologistService;
    }
    create(createPsychologistDto) {
        return this.psychologistService.create(createPsychologistDto);
    }
    findAll() {
        return this.psychologistService.findAll();
    }
    findUnique(PsychologistId) {
        return this.psychologistService.findUnique(PsychologistId);
    }
    update(PsychologistId, updatePsychologistDto) {
        return this.psychologistService.update(PsychologistId, updatePsychologistDto);
    }
    remove(PsychologistId) {
        return this.psychologistService.remove(PsychologistId);
    }
};
exports.PsychologistController = PsychologistController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_psychologist_dto_1.CreatePsychologistDto]),
    __metadata("design:returntype", void 0)
], PsychologistController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PsychologistController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':PsychologistId'),
    __param(0, (0, common_1.Param)('PsychologistId', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PsychologistController.prototype, "findUnique", null);
__decorate([
    (0, common_1.Put)(':PsychologistId'),
    __param(0, (0, common_1.Param)('PsychologistId', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_psychologist_dto_1.UpdatePsychologistDto]),
    __metadata("design:returntype", void 0)
], PsychologistController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':PsychologistId'),
    __param(0, (0, common_1.Param)('PsychologistId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PsychologistController.prototype, "remove", null);
exports.PsychologistController = PsychologistController = __decorate([
    (0, common_1.Controller)('psychologist'),
    __metadata("design:paramtypes", [psychologist_service_1.PsychologistService])
], PsychologistController);
//# sourceMappingURL=psychologist.controller.js.map