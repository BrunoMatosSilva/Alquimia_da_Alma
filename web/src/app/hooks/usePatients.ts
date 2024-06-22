import { useQuery, useQueryClient } from "@tanstack/react-query";
import { PatientService } from "../services/patientsService";
import { useState, useEffect } from "react";
import { PatientsResponser } from "../services/patientsService/getAll";

export function usePatients(pageSize = 7) {
  const [pagination, setPagination] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const queryClient = useQueryClient();

  const { data, isLoading, isInitialLoading } = useQuery<PatientsResponser>({
    queryKey: ['patients', { page: pagination, perPage: pageSize }],
    queryFn: () => PatientService.getAll(pagination, pageSize),
    keepPreviousData: true,
    staleTime: Infinity
  });

  const totalItems = data?.items ?? 0;
  const totalPage = Math.ceil(totalItems / pageSize);
  const hasPreviousPage = pagination > 1;
  const hasNextPage = pagination < totalPage;

  useEffect(() => {
    if (searchTerm) {
      PatientService.search(searchTerm).then(response => {
        queryClient.setQueryData(['patients', { page: pagination, perPage: pageSize }], {
          ...data,
          patients: response.patients
        });
      });
    } else {
      queryClient.setQueryData(['patients', { page: pagination, perPage: pageSize }], data);
    }
  }, [searchTerm, data, pagination, pageSize, queryClient]);

  const patients = queryClient.getQueryData<PatientsResponser>(['patients', { page: pagination, perPage: pageSize }])?.patients ?? [];

  return {
    patients,
    allPatients: data?.allPatients ?? [],
    isLoading,
    setPagination,
    setSearchTerm,
    totalPage,
    pagination,
    hasNextPage,
    hasPreviousPage,
    isInitialLoading,
    invalidateQueries: () => queryClient.invalidateQueries(['patients'])
  };
}