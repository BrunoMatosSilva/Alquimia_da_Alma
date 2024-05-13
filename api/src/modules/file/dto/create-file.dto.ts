export class CreateFileDto {
  patientId: string;
  fieldname: string;
  originalname: string;
  mimetype: string;
  buffer?: Buffer;
  size: number;
}
