import { ConflictException, Injectable, ServiceUnavailableException } from '@nestjs/common';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { PatientsRepository } from 'src/shared/database/repositories/patients.repositories';
import { supabase } from '../file/supabase-config';

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

  async findAll(pageIndex: string, pageSize: string) {
    
    const items = await this.patientsRepo.count();

    const patients = await this.patientsRepo.findMany({
      orderBy: { name: 'asc' },
      skip: (Number(pageIndex) - 1) * Number(pageSize),
      take: Number(pageSize),
    });

    const allPatients = await this.patientsRepo.findMany({
      select: {
        id: true,
        name: true,
      },
    });
  
    return {
      items,
      patients,
      allPatients
    };
    
  }

  async searchByName(name: string) {
    return await this.patientsRepo.findMany({
      where: {
        name: {
          contains: name,
          mode: 'insensitive'
        }
      }
    });
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
      where: { id: PatientId },
    });

    const { data: files, error: listError } = await supabase.storage
      .from('Patients')
      .list(PatientId, {
        limit: 100,
      });

    if (listError) {
      console.error('Erro ao listar arquivos no Supabase:', listError);
      throw new ServiceUnavailableException('Error during file listing');
    }

    if (files.length > 0) {
      const filePaths = files.map(file => `${PatientId}/${file.name}`);

      const { data, error: removeError } = await supabase.storage
        .from('Patients')
        .remove(filePaths);

      if (removeError) {
        throw new ServiceUnavailableException('Error during file remove');
      }

      console.log('Arquivos deletados com sucesso:', data);
    } else {
      console.log('Nenhum arquivo encontrado para deletar na pasta:', PatientId);
    }

    return null;
  }
}
