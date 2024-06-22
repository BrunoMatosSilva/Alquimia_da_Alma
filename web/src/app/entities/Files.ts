export interface Files {
  id: string;
  name: string;
  dateOfBirth: string;
  phone: string;
  zipCode: string;
  address: string;
  number: string;
  complement: string;
  neighborhood: string;
  city: string;
  File: {
    id: string;
    patientId: string;
    originalFileName: string;
  }[]
}