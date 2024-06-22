import { Modal } from "@/components/Modal";
import { useNewAppointimentModalController } from "./useNewAppointmentModalController";
import { Controller } from "react-hook-form";
import { InputSelect } from "@/components/InputSelect";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { DatePickerInput } from "@/components/DatePickerInput";

export function NewAppointment() {
  const {
    isNewAppointmentModalOpen,
    closeNewAppointmentModal,
    control,
    errors,
    register,
    psychologists,
    allPatients,
    handleSubmit,
    handleTimeChange,
    isLoading
  } = useNewAppointimentModalController()


  console.log(allPatients)

  return (
    <div>
      <Modal
        open={isNewAppointmentModalOpen}
        onClose={closeNewAppointmentModal}
        title="Novo Agendamento"
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
            Criar
          </Button>
        </form>
      </Modal>
    </div>
  )
}