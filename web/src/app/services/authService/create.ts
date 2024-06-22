import { httpClient } from "../httpClient";

export interface SignupParams {
  name: string;
  email: string;
  password: string;
}

interface SignupResponse {
  accessToken: string
}

export async function create(params: SignupParams) {
const { data } = await httpClient.post<SignupResponse>('/users/create', params)

return data;
}