import { Appointment } from "@/app/entities/Appointment"
import { usePatients } from "@/app/hooks/usePatients"
import { usePsychologists } from "@/app/hooks/usePsychologists"
import { AppointmentService } from "@/app/services/appointmentService"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

const schema = z.object({
  patientId: z.string().nonempty('Informe a categoria'),
  date: z.date(),
  time: z.string(),
  psychologistId: z.string().nonempty('Informe o tipo de conta'),
})

type FormData = z.infer<typeof schema>

export function useEditAppointmentController(
  appointment: Appointment | null,
  onClose: () => void
) {
  const { 
    control,
    register,
    handleSubmit: hookFormHandleSubmit,
    formState: { errors },
    setValue
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      patientId: appointment?.patientId,
      date: appointment? new Date(appointment.date) : new Date(),
      time: appointment?.time,
      psychologistId: appointment?.psychologistId
    }
  })

  const { allPatients } = usePatients()
  const { psychologists } = usePsychologists()
  const queryClient = useQueryClient()
  const { isLoading, mutateAsync } = useMutation(AppointmentService.update)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const {isLoading: isLoadingDelete, mutateAsync: removeAppointment } = useMutation(AppointmentService.remove)

  const handleTimeChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value.replace(/\D/g, '');
    if (value.length > 2) {
      value = value.slice(0, 2) + ':' + value.slice(2, 4);
    }
    setValue('time', value);
  };

  const handleSubmit = hookFormHandleSubmit(async(data) => {
    try{
      await mutateAsync({
        ...data,
        id: appointment!.id,
        date: data.date.toISOString()
      })

      queryClient.invalidateQueries({ queryKey: ['appointments']})
      toast('Agendamento foi alterado com sucesso!');
      onClose()
    } catch {
      toast('Erro ao alterar consulta!');
    } 
  });

  async function handleDeleteAppointment() {
    try {
      await removeAppointment(appointment!.id)

      queryClient.invalidateQueries({ queryKey: ['appointments']})
      toast('Agendamento deletado com sucesso!');
      onClose()
    } catch {
      toast('Erro ao deletar Agendamento!');
    }
  }

  function handleOpenDeleteModal() {
    setIsDeleteModalOpen(true)
   }

   function handleCloseDeleteModal() {
    setIsDeleteModalOpen(false)
   }

  return {
    control,
    allPatients,
    psychologists,
    register,
    errors,
    handleSubmit,
    handleTimeChange,
    isLoading,
    isDeleteModalOpen,
    handleOpenDeleteModal,
    handleCloseDeleteModal,
    isLoadingDelete,
    handleDeleteAppointment
  }
}