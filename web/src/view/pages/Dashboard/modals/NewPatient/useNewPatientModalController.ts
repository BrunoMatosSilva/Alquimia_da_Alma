import { z } from "zod";
import { useDashboard } from "../../components/Dashboard/useDashboard"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { PatientService } from "@/app/services/patientsService";

const schema = z.object({
  name: z.string().nonempty('Informe o nome'),
  dateOfBirth: z.date(),
  phone: z.string().nonempty('Informe o telefone de contato'),
  zipCode: z.string().nonempty('Informe o CEP'),
  address: z.string().nonempty('Informe a rua'),
  number: z.string(),
  complement: z.string().optional(),
  neighborhood: z.string().nonempty('Informe o bairro'),
  city: z.string().nonempty('Informe a cidade'),
})

type FormData = z.infer<typeof schema>

export function useNewPatientModalController() {
  const {
    isNewPatientModalOpen,
    closeNewPatientModal
  } = useDashboard()

  const {
    register,
    handleSubmit: hookFormHandleSubmit,
    formState: { errors },
    control,
    reset,
    watch,
    setValue,
  } = useForm<FormData>({
    resolver: zodResolver(schema)
  })

  const queryClient = useQueryClient()
  const { isLoading, mutateAsync } = useMutation(PatientService.create)

  const handleSubmit = hookFormHandleSubmit(async (data) => {
    try{
      await mutateAsync({
        ...data,
        dateOfBirth: data.dateOfBirth.toISOString()
      })

      queryClient.invalidateQueries({ queryKey: ['patients']})
      toast('Paciente foi cadastrado com sucesso!');
      closeNewPatientModal();
      reset();
    } catch {
      toast('Erro ao cadastrar o paciente!');
    } 
  })

  return {
    isNewPatientModalOpen,
    closeNewPatientModal,
    register,
    errors,
    control,
    handleSubmit,
    watch,
    setValue,
    isLoading
  }
}