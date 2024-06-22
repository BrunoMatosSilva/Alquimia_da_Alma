import { httpClient } from "../httpClient";

export interface DownloadParams {
  id: string;
  PatientId: string;
  OriginalFileName: string;
}

export async function download({ id, PatientId, OriginalFileName }: DownloadParams) {
  const { data } = await httpClient.get(`/file`, {
    params: {
      id,
      PatientId,
      OriginalFileName
    },
    responseType: 'blob'
  })
  
  return data;
  }