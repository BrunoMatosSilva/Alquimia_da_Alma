import { CreatePatientDto } from './create-patient.dto';
declare const UpdatePatientDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreatePatientDto>>;
export declare class UpdatePatientDto extends UpdatePatientDto_base {
    name: string;
    dateOfBirth: string;
    phone: string;
    zipCode: string;
    address: string;
    number: string;
    complement: string;
    neighborhood: string;
    city: string;
}
export {};
