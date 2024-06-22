import { httpClient } from "../httpClient";

export async function remove(patientId: string) {
  const {data} = await httpClient.delete(`/patient/${patientId}`)

  return data
}