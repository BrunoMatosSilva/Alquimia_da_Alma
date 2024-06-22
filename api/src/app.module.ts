import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { DatabaseModule } from './shared/database/database.module';
import { PsychologistModule } from './modules/psychologist/psychologist.module';
import { PatientModule } from './modules/patient/patient.module';
import { AppointmentModule } from './modules/appoitment/appointment.module';
import { FileModule } from './modules/file/file.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './modules/auth/auth.guard';

@Module({
  imports: [UsersModule, AuthModule, DatabaseModule, PsychologistModule, PatientModule, AppointmentModule, FileModule],
  controllers: [],
  providers:[
    {
      provide: APP_GUARD,
      useClass: AuthGuard
    },
  ],
})
export class AppModule {}
