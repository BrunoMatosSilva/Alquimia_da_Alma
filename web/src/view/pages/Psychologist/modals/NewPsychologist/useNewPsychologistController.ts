import { PsychologistService } from "@/app/services/psychologistService";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { usePsychologist } from "../../components/Psychologist/usePsychologist";

const schema = z.object({
  name: z.string().nonempty('Informe o nome'),
});

type FormData = z.infer<typeof schema>

export function useNewPsychologistController() {
  const {
    closeNewPsychologistModal,
    isNewPsychologistModalOpen
  } = usePsychologist();

  const {
    register,
    handleSubmit: hookFormHandleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>({
    resolver: zodResolver(schema)
  })
  
  const queryClient = useQueryClient()
  const { isLoading, mutateAsync } = useMutation(PsychologistService.create)

  const handleSubmit = hookFormHandleSubmit(async (data) => {
    try{
      await mutateAsync({
        ...data,
      })

      queryClient.invalidateQueries({ queryKey: ['psychologists']})
      toast('Piscologa(o) foi cadastrado com sucesso!');
      closeNewPsychologistModal()
      reset();
    } catch {
      toast('Erro ao cadastrar o profissional!');
    } 
  })

  return {
    register,
    errors,
    isNewPsychologistModalOpen,
    isLoading,
    closeNewPsychologistModal,
    handleSubmit
  }
}