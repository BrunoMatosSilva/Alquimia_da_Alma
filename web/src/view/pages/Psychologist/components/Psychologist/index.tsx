import React, { createContext, useCallback, useState } from "react"

interface PsychologistContextValue {
  isNewPsychologistModalOpen: boolean;
  openNewPsychologistModal(): void;
  closeNewPsychologistModal(): void;
}

export const PsychologistContext = createContext({} as PsychologistContextValue)

export function PsychologistProvider({children} : {children: React.ReactNode}) {
  const [isNewPsychologistModalOpen, setIsNewPsychologistModalOpen] = useState(false)

  const openNewPsychologistModal = useCallback(() => {
    setIsNewPsychologistModalOpen(true)
  },[])

  const closeNewPsychologistModal = useCallback(() => {
    setIsNewPsychologistModalOpen(false)
  },[])

  return (
    <PsychologistContext.Provider value={{
      isNewPsychologistModalOpen,
      openNewPsychologistModal,
      closeNewPsychologistModal
    }}>
      {children}
    </PsychologistContext.Provider>
  )
}