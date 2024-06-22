import { httpClient } from "../httpClient";

export interface UpdatePsychologistParams {
  id: string,
  name: string,
}

export async function update({id, ...params}: UpdatePsychologistParams) {
const { data } = await httpClient.put(`/psychologist/${id}`, params)

return data;
}