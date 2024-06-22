import { Appointment } from "@/app/entities/Appointment";
import { Modal } from "@/components/Modal";
import { useEditAppointmentController } from "./useEditAppointmentController";
import { TrashIcon } from "lucide-react";
import { Button } from "@/components/Button";
import { Controller } from "react-hook-form";
import { InputSelect } from "@/components/InputSelect";
import { DatePickerInput } from "@/components/DatePickerInput";
import { Input } from "@/components/Input";
import { ConfirmDeleteModal } from "@/view/components/ConfirmDeleteModal";

interface EditAppointmentModalProps {
  open: boolean;
  onClose(): void;
  appointment: Appointment;
}

export function EditAppointment({ open, onClose, appointment }: EditAppointmentModalProps) {
  const {
    control,
    errors,
    handleSubmit,
    isLoading,
    register,
    allPatients,
    psychologists,
    handleTimeChange,
    handleOpenDeleteModal,
    isDeleteModalOpen,
    handleCloseDeleteModal,
    handleDeleteAppointment,
    isLoadingDelete
  } = useEditAppointmentController(appointment, onClose)

  if (isDeleteModalOpen) {
    return <ConfirmDeleteModal 
    title="Tem certeza que deseja excluir este agendamento?"
    onClose={handleCloseDeleteModal}
    onConfirme={handleDeleteAppointment}
    isLoading={isLoadingDelete}
    />
  }
  
  return(
    <div>
      <Modal
      title="Editar Agendamento"
      open={open}
      onClose={onClose}
      rightAction={(
        <button onClick={handleOpenDeleteModal}>
          <TrashIcon className="text-red-600 h6 w-6" />
        </button>
      )}
      >
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <div>
            <Controller
            control={control}
            name="patientId"
            defaultValue=""
            render={({ field: {onChange, value}}) => (
              <InputSelect
              placeholder="Paciente"
              onChange={onChange}
              value={value}
              error={errors.patientId?.message}
              options={allPatients.map(patients => ({
                value: patients.id,
                label: patients.name
              }))}
              />
            )}
            />
          </div>

          <div>
          <Controller
            control={control}
            name="date"
            defaultValue={new Date()}
            render={({ field: { onChange, value }}) => (
              <DatePickerInput
              onChange={onChange}
              value={value}
              />
            )}
            />
          </div>

          <div>
            <Input 
            placeholder="Horário"
            {...register("time")}
            onChange={handleTimeChange}
            error={errors.time?.message}
            />
          </div>

          <div>
            <Controller
            control={control}
            name="psychologistId"
            defaultValue=""
            render={({ field: {onChange, value}}) => (
              <InputSelect 
              placeholder="Profissional"
              onChange={onChange}
              value={value}
              error={errors.psychologistId?.message}
              options={psychologists.map(psychologist => ({
                value: psychologist.id,
                label: psychologist.name
              }))}
              />
            )}
            />
          </div>

          <Button
          className="mt-4 bg-secondary text-white"
          isLoading={isLoading}
          >
            Alterar
          </Button>
        </form>
      </Modal>
    </div>
  )
}