import { Psychologist } from "@/app/entities/Psychologist";
import { usePsychologists } from "@/app/hooks/usePsychologists";
import { useCallback, useState } from "react";

export function UsePsychologistController() {

  const {
    psychologists,
    isLoading
  } = usePsychologists()

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [psychologistBeingEdited, setPsychologistBeingEdited] = useState<Psychologist | null>(null);

  const handleOpenEditModal = useCallback((psychologist: Psychologist) => {
    setPsychologistBeingEdited(psychologist);
    setIsEditModalOpen(true);
  }, [])

  const handleCloseEditModal = useCallback(() => {
    setPsychologistBeingEdited(null);
    setIsEditModalOpen(false);
  },[])

  return {
    isEditModalOpen,
    psychologists,
    isLoading,
    handleCloseEditModal,
    handleOpenEditModal,
    psychologistBeingEdited
  }
}