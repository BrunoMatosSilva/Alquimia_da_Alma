import { usePsychologists } from "@/app/hooks/usePsychologists"
import { useState } from "react"

export function useFiltersModalController() {
  const [selectedPsychologistId, setSelectedPsychologistId] = useState<undefined | string>(undefined)
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear())
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1)
  const [selectedDay, setSelectedDay] = useState(new Date().getDate())

  const { psychologists } = usePsychologists()

  function handleSelectPsychologist( psychologistId: string) {
    setSelectedPsychologistId(prevState => (
      prevState === psychologistId ? undefined : psychologistId
    ))
  }

  function handleChangeYear(step: number) {
    setSelectedYear(prevState => prevState + step)
  }

  function handleChangeMonth(step: number) {
    setSelectedMonth(prevState => prevState + step)
  }

  function handleChangeDay(step: number) {
    setSelectedDay(prevState => prevState + step)
  }


  return {
    handleSelectPsychologist,
    handleChangeYear,
    handleChangeMonth,
    handleChangeDay,
    selectedPsychologistId,
    selectedYear,
    selectedMonth,
    selectedDay,
    psychologists
  }
}