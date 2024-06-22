import { httpClient } from "../httpClient";

export interface AppointmentFilterParams {
  day: number;
  month: number;
  year: number;
	psychologistId?: string
}

export interface AppointmentResponse {
		id: string;
		patientId: string;
		psychologistId: string;
		date: string;
		time: string;
		patient: {
			id: string,
			name: string
		},
		psychologist: {
			id: string,
			name: string
		}
}

export async function getAll(filters: AppointmentFilterParams): Promise<AppointmentResponse[]> {
  const { data } = await httpClient.get<AppointmentResponse[]>(`/appointment`, {
    params: filters
  })
  
  return data;
  }