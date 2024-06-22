import { httpClient } from "../httpClient";

export interface CreatePsychologistParams {
  name: string,
}

export async function create(params: CreatePsychologistParams) {
const { data } = await httpClient.post('/psychologist', params)

return data;
}