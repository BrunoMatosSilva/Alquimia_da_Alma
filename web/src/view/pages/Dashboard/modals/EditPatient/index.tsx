import { Input } from "@/components/Input";
import { Modal } from "@/components/Modal";
import { useEditPatientModalController } from "./useEditPatientModalController";
import { Button } from "@/components/Button";
import { Controller } from "react-hook-form";
import { DatePickerInput } from "@/components/DatePickerInput";
import { Patient } from "@/app/entities/Patients";
import { TrashIcon } from "lucide-react";
import { ConfirmDeleteModal } from "@/view/components/ConfirmDeleteModal";
import { useEffect } from "react";

interface EditTransactionModalProps {
  open: boolean;
  onClose(): void;
  patient: Patient;
}

export function EditPatientModal({open, patient, onClose }: EditTransactionModalProps) {
  const {
    register,
    control,
    errors,
    handleSubmit,
    handleCloseDeleteModal,
    handleDeletePatient,
    isLoadingDelete,
    isDeleteModalOpen,
    handleOpenDeleteModal,
    watch,
    setValue
  } = useEditPatientModalController(patient, onClose)

  useEffect(() => {
  
    async function load() {
     const { unsubscribe } = watch(async(formData, {name}) => {
        const zipcode = formData.zipCode ?? '';
  
        if(name === 'zipCode' && zipcode.length >= 8) {
          const response = await fetch(`https://viacep.com.br/ws/${zipcode}/json/`)
          const body = await response.json();
        
          setValue('city', body.localidade)
          setValue('address', body.logradouro)
          setValue('neighborhood', body.bairro)
          }
      });
  
      return () => {
        unsubscribe();
      }
    }
  
    load()
  
  },[setValue, watch])

  if (isDeleteModalOpen) {
    return <ConfirmDeleteModal 
    title="Tem certeza que deseja excluir este paciente?"
    onClose={handleCloseDeleteModal}
    onConfirme={handleDeletePatient}
    isLoading={isLoadingDelete}
    />
  }

  return (
  <div>
    <Modal 
      title="Editar Paciente"
      open={open}
      onClose={onClose}
      rightAction={(
        <button onClick={handleOpenDeleteModal}>
          <TrashIcon className="text-red-600 h6 w-6" />
        </button>
      )}
      >
        <form onSubmit={handleSubmit}>
         <div className="flex flex-col gap-2">
         <div>
            <Input
            className="border-secondary font-light"
            placeholder="Nome Completo"
            type="text"
            defaultValue={patient?.name}
            error={errors.name?.message}
            {...register('name')}
            
            />
          </div>

          <div>
          <Controller
            control={control}
            name="dateOfBirth"
            defaultValue={patient ? new Date(patient.dateOfBirth) : new Date()}
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
            className="border-secondary font-light"
            placeholder="Telefone"
            defaultValue={patient?.phone}
            error={errors.phone?.message}
            {...register('phone')}
            
            />
          </div>

          <div>
            <Input
            className="border-secondary font-light"
            placeholder="CEP"
            defaultValue={patient?.zipCode}
            error={errors.zipCode?.message}
            {...register('zipCode')}
            />
          </div>

          <div>
            <Input
            className="border-secondary font-light"
            placeholder="Rua"
            defaultValue={patient?.address}
            error={errors.address?.message}
            {...register('address')}
            />
          </div>

          <div>
            <Input
            className="border-secondary font-light"
            placeholder="Numero"
            defaultValue={patient?.number}
            error={errors.number?.message}
            type="number"
            {...register('number')}
            />
          </div>

          <div>
            <Input
            className="border-secondary font-light"
            placeholder="Complemento"
            defaultValue={patient?.complement}
            error={errors.complement?.message}
            {...register('complement')}
            />
          </div>

          <div>
            <Input
            className="border-secondary font-light"
            placeholder="Bairro"
            defaultValue={patient?.neighborhood}
            error={errors.neighborhood?.message}
            {...register('neighborhood')}
            />
          </div>

          <div>
            <Input
            className="border-secondary font-light"
            placeholder="Cidade"
            defaultValue={patient?.city}
            error={errors.city?.message}
            {...register('city')}
            />
          </div>

          <Button 
          className="bg-secondary text-white mt-2"
          type="submit"
          >
            Alterar
          </Button>
         </div>
         </form>
      </Modal>
  </div>
  )
}