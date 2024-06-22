import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Modal } from "@/components/Modal";
import { useNewPsychologistController } from "./useNewPsychologistController";

export function NewPsychologist() {
  const {
    isNewPsychologistModalOpen,
    closeNewPsychologistModal,
    handleSubmit,
    register,
    errors
  } = useNewPsychologistController()

  return(
    <div>
      <Modal 
      title="Novo Profissional"
      open={isNewPsychologistModalOpen}
      onClose={closeNewPsychologistModal}
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