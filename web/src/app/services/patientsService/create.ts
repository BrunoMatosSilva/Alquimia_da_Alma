import { httpClient } from "../httpClient";

export interface CreatePatientParams {
  name: string,
  dateOfBirth: string,
  phone: string,
  zipCode: string,
  address: string,
  number: string,
  complement?: string,
  neighborhood: string,
  city: string,
}

export async function create(params: CreatePatientParams) {
const { data } = await httpClient.post('/patient', params)

return data;
}