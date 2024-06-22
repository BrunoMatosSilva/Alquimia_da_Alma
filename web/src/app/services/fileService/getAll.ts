import { httpClient } from "../httpClient";

export interface FileResponse {
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

export async function getAll(patientId: string) {
  const { data } = await httpClient.get<FileResponse>(`/file/${patientId}`)
  
  return data;
  }