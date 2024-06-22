import { httpClient } from "../httpClient";

export interface UpdatePatientParams {
  id: string,
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

export async function update({id, ...params}: UpdatePatientParams) {
const { data } = await httpClient.put(`/patient/${id}`, params)

return data;
}