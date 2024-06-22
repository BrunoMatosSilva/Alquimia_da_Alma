import { useQuery } from "@tanstack/react-query";
import { AppointmentFilterParams, AppointmentResponse } from "../services/appointmentService/getAll";
import { AppointmentService } from "../services/appointmentService";

export function useAppointments(filters: AppointmentFilterParams) {

  const { data, isFetching, isInitialLoading, refetch } = useQuery<AppointmentResponse[]>({ 
    queryKey:['appointments'], 
    queryFn: () => AppointmentService.getAll(filters), 
    staleTime: Infinity,
  });

  return {
    appointments: data || [],
    isLoading: isFetching,
    isInitialLoading,
    refetchAppointments: refetch
  }

}