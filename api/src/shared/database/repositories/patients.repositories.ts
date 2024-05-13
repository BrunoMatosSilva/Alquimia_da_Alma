import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma.service";
import { Prisma } from "@prisma/client";

@Injectable()
export class PatientsRepository {
  constructor(private readonly prismaService: PrismaService){}

  create(createDto: Prisma.PatientCreateArgs) {
    return this.prismaService.patient.create(createDto)
  }

  findMany(findManyDto: Prisma.PatientFindManyArgs) {
    return this.prismaService.patient.findMany(findManyDto)
  }

  findUnique(findUnique: Prisma.PatientFindUniqueArgs) {
    return this.prismaService.patient.findUnique(findUnique)
  }

  update(updateDto: Prisma.PatientUpdateArgs) {
    return this.prismaService.patient.update(updateDto);
  }

  delete(deleteDto: Prisma.PatientDeleteArgs) {
    return this.prismaService.patient.delete(deleteDto)
  }

}