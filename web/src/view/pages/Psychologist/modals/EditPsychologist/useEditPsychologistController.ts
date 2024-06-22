import { Psychologist } from "@/app/entities/Psychologist";
import { PsychologistService } from "@/app/services/psychologistService";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const schema = z.object({
  name: z.string().nonempty('Informe o nome'),
});

type FormData = z.infer<typeof schema>

export function useEditPsychologistController(
  psychologist: Psychologist | null,
  onClose:() => void
) {
  const {
    register,
    handleSubmit: hookFormHandleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: psychologist?.name,
    }
  })
  
  const queryClient = useQueryClient()
  const { isLoading, mutateAsync } = useMutation(PsychologistService.update);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const {isLoading: isLoadingDelete, mutateAsync: removePsychologist } = useMutation(PsychologistService.remove)

  const handleSubmit = hookFormHandleSubmit(async (data) => {
    try{
      await mutateAsync({
        ...data,
        id: psychologist!.id
      })

      queryClient.invalidateQueries({ queryKey: ['psychologists']})
      toast('Piscologa(o) foi editado com sucesso!');
      onClose()
      reset();
    } catch {
      toast('Erro ao editar o profissional!');
    } 
  })

  async function handleDeletePsychologist() {
    try {
      await removePsychologist(psychologist!.id)

      queryClient.invalidateQueries({ queryKey: ['psychologists']})
      toast('Profissional deletado com sucesso!');
      onClose()
    } catch {
      toast('Erro ao deletar Profissional!');
    }
  }

  function handleOpenDeleteModal() {
    setIsDeleteModalOpen(true)
   }

   function handleCloseDeleteModal() {
    setIsDeleteModalOpen(false)
   }

  return {
    register,
    errors,
    isLoading,
    handleSubmit,
    isLoadingDelete,
    isDeleteModalOpen,
    handleDeletePsychologist,
    handleOpenDeleteModal,
    handleCloseDeleteModal
  }
}