import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { PrismaService } from "../prisma.service";

@Injectable()
export class FilesRepository {
  constructor(private readonly prismaService: PrismaService){}

  create(createDto: Prisma.FileCreateArgs) {
    return this.prismaService.file.create(createDto)
  }

  findOne(findFirstDto: Prisma.FileFindFirstArgs) {
    return this.prismaService.file.findFirst(findFirstDto)
  }

  findAll(findAllDto: Prisma.FileFindManyArgs) {
    return this.prismaService.file.findFirst(findAllDto)
  }

  update(updateDto: Prisma.FileUpdateArgs) {
    return this.prismaService.file.update(updateDto)
  }

  delete(deleteDto: Prisma.FileDeleteArgs) {
    return this.prismaService.file.delete(deleteDto)
  }
}