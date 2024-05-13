import { Controller, Get, Post, Param, Delete, UploadedFile, UseInterceptors, Query, Res } from '@nestjs/common';
import { FileService } from './file.service';
import { CreateFileDto } from './dto/create-file.dto';
import { Response } from 'express';
import { FileInterceptor } from '@nestjs/platform-express';
import { OptionalParseUUIDPipe } from 'src/shared/pipes/OptionalParseUUIDPipe';

@Controller('file')
export class FileController {
  constructor(private readonly fileService: FileService) {}

  @Post(':PatientId')
  @UseInterceptors(FileInterceptor('file'))
  create(@Param('PatientId') PatientId: string, @UploadedFile() createFileDto: CreateFileDto) {
    return this.fileService.create(PatientId, createFileDto)
  }

  @Get(':PatientId')
  findAll(@Param('PatientId') PatientId: string) {
    return this.fileService.findAll(PatientId);
  }

  @Get()
  findOne(
    @Query('id', OptionalParseUUIDPipe) id: string,
    @Query('PatientId', OptionalParseUUIDPipe) PatientId: string,
    @Query('OriginalFileName') originalFileName: string,
    @Res() res: Response
  ) {
    return this.fileService.findOne(id, PatientId, originalFileName, res);
  }

  @Delete()
    remove(
      @Query('id', OptionalParseUUIDPipe) id: string,
      @Query('PatientId', OptionalParseUUIDPipe) PatientId: string,
      @Query('OriginalFileName') originalFileName: string
    ) {
    return this.fileService.remove(id, PatientId, originalFileName);
  }
}
