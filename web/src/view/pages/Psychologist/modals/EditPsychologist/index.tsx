import { Psychologist } from "@/app/entities/Psychologist";
import { useEditPsychologistController } from "./useEditPsychologistController";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Modal } from "@/components/Modal";
import { TrashIcon } from "lucide-react";
import { ConfirmDeleteModal } from "@/view/components/ConfirmDeleteModal";

interface EditPsychologistModalProps {
  open: boolean;
  onClose(): void;
  psychologist: Psychologist;
}

export function EditPsychologist({
  open, 
  onClose, 
  psychologist,
}: EditPsychologistModalProps) {

  const {
    register,
    errors,
    handleSubmit,
    isDeleteModalOpen,
    handleCloseDeleteModal,
    handleDeletePsychologist,
    isLoadingDelete,
    handleOpenDeleteModal
  } = useEditPsychologistController(psychologist, onClose);

  if (isDeleteModalOpen) {
    return <ConfirmDeleteModal 
    title="Tem certeza que deseja excluir este profissional?"
    onClose={handleCloseDeleteModal}
    onConfirme={handleDeletePsychologist}
    isLoading={isLoadingDelete}
    />
  }

  return(
    <div>
      <Modal 
      title="Editar Profissionais"
      open={open}
      onClose={onClose}
      rightAction={(
        <button
        onClick={handleOpenDeleteModal}
        >
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
            defaultValue={psychologist?.name}
            error={errors.name?.message}
            {...register('name')}
            
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