import React, { createContext, useCallback, useState } from "react"

interface AppointmentContextValue {
  isNewAppointmentModalOpen: boolean;
  openNewAppointmentModal(): void;
  closeNewAppointmentModal(): void;
}

export const AppointmentContext = createContext({} as AppointmentContextValue)

export function AppointmentProvider({children} : {children: React.ReactNode}) {
  const [isNewAppointmentModalOpen, setIsNewAppointmentModalOpen] = useState(false)

  const openNewAppointmentModal = useCallback(() => {
    setIsNewAppointmentModalOpen(true)
  },[])

  const closeNewAppointmentModal = useCallback(() => {
    setIsNewAppointmentModalOpen(false)
  },[])

  return (
    <AppointmentContext.Provider value={{
      isNewAppointmentModalOpen,
      openNewAppointmentModal,
      closeNewAppointmentModal
    }}>
      {children}
    </AppointmentContext.Provider>
  )
}