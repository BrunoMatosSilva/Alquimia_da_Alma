import { useQuery, QueryKey } from "@tanstack/react-query";
import { FileService } from "../services/fileService";
import { FileResponse } from "../services/fileService/getAll";

export function useFiles(patientId: string) {
  const queryKey: QueryKey = ['files', patientId];

  const { data, isFetching } = useQuery<FileResponse>(
    queryKey,
    () => FileService.getAll(patientId),
    { 
      staleTime: Infinity,
      enabled: !!patientId,
    }
  );

  return { 
    files: data?.File ?? [], 
    isLoading: isFetching,
  }
}