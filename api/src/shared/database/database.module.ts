import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { UsersRepository } from './repositories/users.repositories';
import { PsychologistsRepository } from './repositories/psychologists.repositories';
import { PatientsRepository } from './repositories/patients.repositories';
import { AppointmentsRepository } from './repositories/appointments.repositories';
import { FilesRepository } from './repositories/files.repositories';

@Global()
@Module({
  providers: [PrismaService, UsersRepository, PsychologistsRepository, PatientsRepository, AppointmentsRepository, FilesRepository],
  exports: [UsersRepository, PsychologistsRepository, PatientsRepository, AppointmentsRepository, FilesRepository]
})
export class DatabaseModule {}