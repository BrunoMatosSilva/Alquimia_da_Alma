import { useQuery } from "@tanstack/react-query";
import { PsychologistService } from "../services/psychologistService";
import { PsychologistResponse } from "../services/psychologistService/getAll";

export function usePsychologists() {
   const { data, isLoading } = useQuery<PsychologistResponse[]>({ 
    queryKey:['psychologists'], 
    queryFn: () => PsychologistService.getAll(), 
    staleTime: Infinity,
  });

  return { 
    psychologists: data ?? [], 
    isLoading,
  }
}