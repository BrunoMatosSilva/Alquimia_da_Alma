import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { PatientService } from "@/app/services/patientsService";
import { Patient } from "@/app/entities/Patients";
import { useState } from "react";

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

export function useEditPatientModalController(
  patient: Patient | null,
  onClose:() => void
) {
  
  const {
    register,
    handleSubmit: hookFormHandleSubmit,
    formState: { errors },
    control,
    watch,
    setValue
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: patient?.name,
      dateOfBirth: patient ? new Date(patient.dateOfBirth) : new Date(),
      phone: patient?.phone,
      zipCode: patient?.zipCode,
      address: patient?.address,
      number: patient?.number,
      complement: patient?.complement,
      neighborhood: patient?.neighborhood,
      city: patient?.city
    }
  })

  const queryClient = useQueryClient()
  const { isLoading, mutateAsync } = useMutation(PatientService.update)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const {isLoading: isLoadingDelete, mutateAsync: removePatient } = useMutation(PatientService.remove)

  const handleSubmit = hookFormHandleSubmit(async (data) => {
    try{
      await mutateAsync({
        ...data,
        id: patient!.id,
        dateOfBirth: data.dateOfBirth.toISOString()
      })
      
      queryClient.invalidateQueries({ queryKey: ['patients']})
      toast('Editado com sucesso!');
      onClose()
    } catch {
      toast('Erro ao editar!');
    } 
  })

  async function handleDeletePatient() {
    try {
      await removePatient(patient!.id)

      queryClient.invalidateQueries({ queryKey: ['patients']})
      toast('Paciente deletado com sucesso!');
      onClose()
    } catch {
      toast('Erro ao deletar paciente!');
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
    control,
    handleSubmit,
    isLoading,
    handleOpenDeleteModal,
    handleCloseDeleteModal,
    isDeleteModalOpen,
    handleDeletePatient,
    isLoadingDelete,
    watch,
    setValue
  }
}