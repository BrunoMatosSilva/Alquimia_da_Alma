import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { DatabaseModule } from './shared/database/database.module';
import { PsychologistModule } from './modules/psychologist/psychologist.module';
import { PatientModule } from './modules/patient/patient.module';
import { AppointmentModule } from './modules/appoitment/appointment.module';
import { FileModule } from './modules/file/file.module';

@Module({
  imports: [UsersModule, AuthModule, DatabaseModule, PsychologistModule, PatientModule, AppointmentModule, FileModule],
  controllers: [],
  providers:[],
})
export class AppModule {}
