import { httpClient } from "../httpClient";

export interface PsychologistResponse {
  id: string;
  name: string;
}

export async function getAll() {
  const { data } = await httpClient.get<PsychologistResponse[]>(`/psychologist`)
  
  return data;
  }