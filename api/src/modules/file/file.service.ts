import { BadRequestException, Injectable, NotFoundException, ServiceUnavailableException, Res } from '@nestjs/common';
import { CreateFileDto } from './dto/create-file.dto';
import { FilesRepository } from 'src/shared/database/repositories/files.repositories';
import { PatientsRepository } from 'src/shared/database/repositories/patients.repositories';
import { Response } from 'express';
import { supabase } from './supabase-config';

@Injectable()
export class FileService {
  constructor(
    private readonly fileRepo: FilesRepository,
    private readonly patientRepo: PatientsRepository
  ) {}
  
  async create(PatientId: string, createFileDto: CreateFileDto) {

    const existingFile = await this.fileRepo.findOne({
      where: {
        patientId: PatientId,
        originalFileName:createFileDto.originalname
      },
    });

    if (existingFile) {
      throw new BadRequestException(
        'There is already exist file.'
      );
    }

    const { data, error: uploadError } = await supabase.storage
      .from(`Patients/${PatientId}`)
      .upload(createFileDto.originalname, createFileDto.buffer, {
        upsert: true,
      }
    );

    if (uploadError) {
      throw new ServiceUnavailableException('Error during file send')
    }

   const createFile = await this.fileRepo.create({
      data: {
        patientId: PatientId,
        originalFileName: createFileDto.originalname,
      },
    });

    return {createFile};
  }

  async findAll(PatientId: string) {

    return this.patientRepo.findUnique({
      where: {id: PatientId},
      include: {
        File: {
           select: {
            id: true,
            patientId: true,
            originalFileName: true
           }
        }
      }
    });
  }

 async findOne(id: string, PatientId: string, originalFileName: string, @Res() res: Response) {

    const { data, error: uploadError } = await supabase.storage
      .from(`Patients`)
      .download(`${PatientId}/${originalFileName}`);

    if (uploadError) {
        throw new ServiceUnavailableException('Error during file download')
    }

    if (!data) {
      throw new NotFoundException('File not found');
    }

    const buffer = await data.arrayBuffer();

    const fileBuffer = Buffer.from(buffer);

    res.setHeader('Content-Disposition', `attachment; filename="${originalFileName}"`);
    res.setHeader('Content-Type', 'application/octet-stream');

    res.send(fileBuffer);
  }

async remove(id: string, PatientId: string, originalFileName: string) {

    const existingFile = await this.fileRepo.findOne({
      where: {
        id,
        patientId: PatientId,
        originalFileName,
      },
    });

    if (!existingFile) {
      throw new BadRequestException(
        'Sorry, This Media File Does Not Exist'
      );
    }

    const { data, error: uploadError } = await supabase.storage
      .from(`Patients`)
      .remove([`${PatientId}/${originalFileName}`]);

    if (uploadError) {
        throw new ServiceUnavailableException('Error during file remove')
    }

   await this.fileRepo.delete({
    where: {id}
   })

    return null ;
  }
}
