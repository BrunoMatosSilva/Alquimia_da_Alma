import { httpClient } from "../httpClient";

export interface DeleteFileParams {
  id: string;
  PatientId: string;
  OriginalFileName: string;
}

export async function remove({ id, PatientId, OriginalFileName }: DeleteFileParams) {
  const {data} = await httpClient.delete(`/file`, {
    params: {
      id,
      PatientId,
      OriginalFileName
    },
}
)

  return data
}