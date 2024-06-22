import { useForm } from "react-hook-form"
import { useAppointment } from "../../components/Appointment/useAppointment"
import { usePatients } from "@/app/hooks/usePatients"
import { usePsychologists } from "@/app/hooks/usePsychologists"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import React from "react"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { AppointmentService } from "@/app/services/appointmentService"
import { toast } from "sonner"

const schema = z.object({
  patientId: z.string().nonempty('Informe a categoria'),
  date: z.date(),
  time: z.string(),
  psychologistId: z.string().nonempty('Informe o tipo de conta'),
})

type FormData = z.infer<typeof schema>

export function useNewAppointimentModalController() {
  const {
    isNewAppointmentModalOpen,
    closeNewAppointmentModal
  } = useAppointment()

  const { 
    control,
    register,
    handleSubmit: hookFormHandleSubmit,
    formState: { errors },
    reset,
    setValue
  } = useForm<FormData>({
    resolver: zodResolver(schema)
  })

  const { allPatients } = usePatients()
  const { psychologists } = usePsychologists()
  const queryClient = useQueryClient()
  const { isLoading, mutateAsync } = useMutation(AppointmentService.create)

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
        date: data.date.toISOString()
      })

      queryClient.invalidateQueries({ queryKey: ['appointments']})
      toast('Agendamento foi cadastrado com sucesso!');
      closeNewAppointmentModal();
      reset();
    } catch {
      toast('Erro ao agendar consulta!');
    } 
  })

  return {
    isNewAppointmentModalOpen,
    closeNewAppointmentModal,
    control,
    allPatients,
    psychologists,
    register,
    errors,
    handleSubmit,
    handleTimeChange,
    isLoading
  }
}