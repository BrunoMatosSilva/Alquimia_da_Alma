import React, { createContext, useCallback, useState } from "react"

interface DashboardContextValue {
  isNewPatientModalOpen: boolean;
  openNewPatientModal(): void;
  closeNewPatientModal(): void;
}

export const DashboardContext = createContext({} as DashboardContextValue)

export function DashboardProvider({children} : {children: React.ReactNode}) {
  const [isNewPatientModalOpen, setIsNewPatientModalOpen] = useState(false)

  const openNewPatientModal = useCallback(() => {
    setIsNewPatientModalOpen(true)
  },[])

  const closeNewPatientModal = useCallback(() => {
    setIsNewPatientModalOpen(false)
  },[])

  return (
    <DashboardContext.Provider value={{
      isNewPatientModalOpen,
      openNewPatientModal,
      closeNewPatientModal
    }}>
      {children}
    </DashboardContext.Provider>
  )
}