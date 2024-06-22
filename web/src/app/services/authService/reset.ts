import { httpClient } from '../httpClient'

export interface ResetParams {
  newPassword: string
  token: string
}

export async function reset(params: ResetParams) {
  const { data } = await httpClient.put('/auth/reset', params, {
    headers: {
      Authorization: 'Bearer ' + params.token
    }
  })

  return data
}