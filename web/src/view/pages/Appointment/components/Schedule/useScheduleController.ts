import { Appointment } from "@/app/entities/Appointment";
import { useAppointments } from "@/app/hooks/useAppointments";
import { AppointmentFilterParams } from "@/app/services/appointmentService/getAll";
import { useCallback, useEffect, useState } from "react";

export function useScheduleController() {
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false)
  const [isOpenEditModal, setIsOpenEditModal] = useState(false)
  const [appointmentBeingEdit, setAppointmentBeingEdit] = useState<Appointment | null>()

  const [filters, setFilters] = useState<AppointmentFilterParams>({
    day : new Date().getDate(),
    month : new Date().getMonth() + 1,
    year: new Date().getFullYear(),
  })

  function handleChangeFilter<TFilter extends keyof AppointmentFilterParams>(filter: TFilter) {
    return (value: AppointmentFilterParams[TFilter]) => {
      if(value === filters[filter]) return;

      setFilters(prevState => ({
        ...prevState,
        [filter]: value
      }));
    }
  }

  function handleApplyFilters({
    psychologistId,
    year,
    month,
    day
  }: { psychologistId: string | undefined; year: number; month: number; day: number }) {
    handleChangeFilter('psychologistId')(psychologistId);
    handleChangeFilter('year')(year);
    handleChangeFilter('month')(month);
    handleChangeFilter('day')(day);
    setIsFilterModalOpen(false);
  }

  const handleOpenFilterModal = useCallback(() => {
    setIsFilterModalOpen(true)
  },[])

  const handleCloseFilterModal = useCallback(() => {
    setIsFilterModalOpen(false)
  },[])

  const {
    appointments,
    isLoading,
    isInitialLoading,
    refetchAppointments
  } = useAppointments(filters)

  useEffect(() => {
    refetchAppointments()
  },[filters, refetchAppointments])

  const handleOpenEditModal = useCallback((appointment: Appointment) => {
    setIsOpenEditModal(true)
    setAppointmentBeingEdit(appointment)
  },[])

  const handleCloseEditModal = useCallback(() => {
    setIsOpenEditModal(false)
    setAppointmentBeingEdit(null)
  },[])

  return {
    appointments,
    isLoading,
    filters,
    isInitialLoading,
    handleChangeFilter,
    isFilterModalOpen,
    handleOpenFilterModal,
    handleCloseFilterModal,
    handleApplyFilters,
    isOpenEditModal,
    handleCloseEditModal,
    handleOpenEditModal,
    appointmentBeingEdit
  }
}