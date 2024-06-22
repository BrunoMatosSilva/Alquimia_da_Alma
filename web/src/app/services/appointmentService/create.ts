import { httpClient } from "../httpClient";

export interface CreateAppointmentParams {
  patientId: string,
  date: string,
  time: string,
  psychologistId: string
}

export async function create(params: CreateAppointmentParams) {
const { data } = await httpClient.post('/appointment', params)

return data;
}