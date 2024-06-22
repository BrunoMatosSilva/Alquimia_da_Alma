import { AllPatient, Patient } from "@/app/entities/Patients";
import { httpClient } from "../httpClient";

export type PatientsResponser = {
  items: number;
  patients: Array<Patient>,
  allPatients: Array<AllPatient>
}

export async function getAll(pageIndex = 1, pageSize = 7) {
  const { data } = await httpClient.get<PatientsResponser>('/patient', {
    params: {
      pageIndex,
      pageSize,
    }
  })
  
  return data;
  }