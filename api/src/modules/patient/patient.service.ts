import { ConflictException, Injectable } from '@nestjs/common';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { PatientsRepository } from 'src/shared/database/repositories/patients.repositories';

@Injectable()
export class PatientService {
  constructor(private readonly patientsRepo: PatientsRepository){}

  async create(createPatientDto: CreatePatientDto) {
    const {
      name,
      phone,
      dateOfBirth,
      zipCode,
      address,
      number,
      complement,
      neighborhood,
      city
    } = createPatientDto

    const nameTaken = await this.patientsRepo.findUnique({
      where: { name }
    })

    if (nameTaken) {
      throw new ConflictException('This name is already in use.');
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
    })

    return patient;
  }

  async findAll() {
   return await this.patientsRepo.findMany({})
  }

  async findUnique(patientId: string) {
    return this.patientsRepo.findUnique({
      where: { id: patientId}
    });
  }

 async update(PatientId: string, updatePatientDto: UpdatePatientDto) {
    const { 
      name,
      dateOfBirth,
      phone,
      zipCode,
      address,
      number,
      complement,
      neighborhood,
      city
     } = updatePatientDto

    return this.patientsRepo.update({
      where: { id: PatientId},
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
    })
  }

 async remove(PatientId: string) {
    const user = await this.patientsRepo.delete({
      where: { id: PatientId }
    });

    return null;
  }
}
