import { httpClient } from "../httpClient";

export async function create(patientId:string, file:File) {
  if (!patientId) {
    throw new Error("O ID do paciente não pode ser undefined.");
  }
  
  const formData = new FormData();
  formData.append('file', file);

  const { data } = await httpClient.post(`/file/${patientId}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
  
  return data;
  }