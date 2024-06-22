import { Patient } from "@/app/entities/Patients";
import { httpClient } from "../httpClient";

type SearchResponse = {
  patients: Array<Patient>
};

export async function search(name: string): Promise<SearchResponse> {
  const { data } = await httpClient.get<Array<Patient>>('/patient/search', {
    params: {
      name
    }
  });

  return { patients: data };
}
