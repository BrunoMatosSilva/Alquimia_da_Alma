import { httpClient } from "../httpClient";

export interface UpdateAppointmentParams {
  id: string,
  patientId: string,
  date: string,
  time: string,
  psychologistId: string
}

export async function update({id, ...params}: UpdateAppointmentParams) {
const { data } = await httpClient.put(`/appointment/${id}`, params)

return data;
}