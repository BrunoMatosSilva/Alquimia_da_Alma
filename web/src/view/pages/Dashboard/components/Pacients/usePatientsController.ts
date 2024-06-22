import { Patient } from "@/app/entities/Patients";
import { usePatients } from "@/app/hooks/usePatients";
import { useCallback, useState } from "react";

export function UsePatientsController() {
  const {
    isLoading,
    setPagination,
    patients,
    setSearchTerm,
    totalPage,
    pagination,
    hasNextPage,
    hasPreviousPage,
    invalidateQueries,
    isInitialLoading
  } = usePatients();

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [patientBeingEdited, setPatientBeingEdited] = useState<Patient | null>(null);

  const handleNextPage = useCallback(() => {
    setPagination(prevState => prevState + 1);
  }, [setPagination]);

  const handlePreviousPage = useCallback(() => {
    setPagination(prevState => prevState - 1);
  }, [setPagination]);

  const handleSetPage = useCallback((page: number) => {
    setPagination(page);
  }, [setPagination]);

  const handleOpenEditModal = useCallback((patient: Patient) => {
    setPatientBeingEdited(patient);
    setIsEditModalOpen(true);
  }, []);

  const handleCloseEditModal = useCallback(() => {
    setPatientBeingEdited(null);
    setIsEditModalOpen(false);
  }, []);

  const handleSearch = useCallback((name: string) => {
    setSearchTerm(name);
  }, [setSearchTerm, setPagination]);

  const clearSearch = useCallback(() => {
    setSearchTerm("");
    invalidateQueries()
  }, [setSearchTerm, setPagination]);

  return {
    patients,
    isLoading,
    isEditModalOpen,
    handleOpenEditModal,
    handleCloseEditModal,
    patientBeingEdited,
    handleSearch,
    clearSearch,
    isInitialLoading,
    pagination: {
      handleNextPage,
      handlePreviousPage,
      handleSetPage,
      totalPage,
      pagination,
      hasNextPage,
      hasPreviousPage,
    },
  };
}
