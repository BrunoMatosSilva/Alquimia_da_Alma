import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma.service";
import { Prisma } from "@prisma/client";

@Injectable()
export class AppointmentsRepository {
  constructor(private readonly prismaService: PrismaService){}

  create(createDto: Prisma.AppointmentCreateArgs) {
    return this.prismaService.appointment.create(createDto)
  }

  findMany(findManyDto: Prisma.AppointmentFindManyArgs) {
    return this.prismaService.appointment.findMany(findManyDto)
  }

  findUnique(findUnique: Prisma.AppointmentFindUniqueArgs) {
    return this.prismaService.appointment.findUnique(findUnique)
  }

  findOne(findOneDto: Prisma.AppointmentFindFirstArgs) {
    return this.prismaService.appointment.findFirst(findOneDto)
  }

  update(updateDto: Prisma.AppointmentUpdateArgs) {
    return this.prismaService.appointment.update(updateDto);
  }

  delete(deleteDto: Prisma.AppointmentDeleteArgs) {
    return this.prismaService.appointment.delete(deleteDto)
  }

}