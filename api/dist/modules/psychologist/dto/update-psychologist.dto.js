"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePsychologistDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_psychologist_dto_1 = require("./create-psychologist.dto");
class UpdatePsychologistDto extends (0, mapped_types_1.PartialType)(create_psychologist_dto_1.CreatePsychologistDto) {
}
exports.UpdatePsychologistDto = UpdatePsychologistDto;
//# sourceMappingURL=update-psychologist.dto.js.map