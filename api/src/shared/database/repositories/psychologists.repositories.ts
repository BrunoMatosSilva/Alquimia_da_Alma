import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma.service";
import { Prisma } from "@prisma/client";

@Injectable()
export class PsychologistsRepository {
  constructor(private readonly prismaService: PrismaService){}

  create(createDto: Prisma.PsychologistCreateArgs) {
    return this.prismaService.psychologist.create(createDto)
  }

  findMany(findManyDto: Prisma.PsychologistFindManyArgs) {
    return this.prismaService.psychologist.findMany(findManyDto)
  }

  findUnique(findUnique: Prisma.PsychologistFindUniqueArgs) {
    return this.prismaService.psychologist.findUnique(findUnique)
  }

  update(updateDto: Prisma.PsychologistUpdateArgs) {
    return this.prismaService.psychologist.update(updateDto);
  }

  delete(deleteDto: Prisma.PsychologistDeleteArgs) {
    return this.prismaService.psychologist.delete(deleteDto)
  }

}