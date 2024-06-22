import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Modal } from "@/components/Modal";
import { useNewPatientModalController } from "./useNewPatientModalController";
import { Controller } from "react-hook-form";
import { DatePickerInput } from "@/components/DatePickerInput";
import { useEffect} from "react";

export function NewPatientModal() {
const { 
  isNewPatientModalOpen, 
  closeNewPatientModal,
  handleSubmit,
  register,
  control,
  errors,
  setValue,
  watch
} = useNewPatientModalController()

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
  
return (
    <div>
      <Modal 
      title="Novo Paciente"
      open={isNewPatientModalOpen}
      onClose={closeNewPatientModal}
      >
        <form onSubmit={handleSubmit}>
         <div className="flex flex-col gap-2">
         <div>
            <Input
            className="border-secondary font-light"
            placeholder="Nome Completo"
            type="text"
            error={errors.name?.message}
            {...register('name')}
            />
          </div>

          <div>
          <Controller
            control={control}
            name="dateOfBirth"
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
            className="border-secondary font-light"
            placeholder="Telefone"
            error={errors.phone?.message}
            {...register('phone')}
            />
          </div>

          <div>
            <Input
            className="border-secondary font-light"
            placeholder="CEP"
            error={errors.zipCode?.message}
            {...register('zipCode')}
            />
          </div>

          <div>
            <Input
            className="border-secondary font-light"
            placeholder="Rua"
            error={errors.address?.message}
            {...register('address')}
            />
          </div>

          <div>
            <Input
            className="border-secondary font-light"
            placeholder="Numero"
            error={errors.number?.message}
            type="number"
            {...register('number')}
            />
          </div>

          <div>
            <Input
            className="border-secondary font-light"
            placeholder="Complemento"
            error={errors.complement?.message}
            {...register('complement')}
            />
          </div>

          <div>
            <Input
            className="border-secondary font-light"
            placeholder="Bairro"
            error={errors.neighborhood?.message}
            {...register('neighborhood')}
            />
          </div>

          <div>
            <Input
            className="border-secondary font-light"
            placeholder="Cidade"
            error={errors.city?.message}
            {...register('city')}
            />
          </div>

          <Button 
          className="bg-secondary text-white mt-2"
          type="submit"
          >
            Cadastrar
          </Button>
         </div>
         </form>
      </Modal>
    </div>
  )
}