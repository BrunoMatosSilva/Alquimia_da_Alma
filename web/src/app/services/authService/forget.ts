import { httpClient } from "../httpClient";

export interface ForgetParams {
  email: string;
}

export async function forget(params:ForgetParams) {
  const {data} = await httpClient.post('/auth/forget', params)

  return data
}