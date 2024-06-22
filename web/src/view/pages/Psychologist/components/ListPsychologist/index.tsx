import { Edit } from "lucide-react"
import { UsePsychologistController } from "./usePsychologistController"
import { EditPsychologist } from "../../modals/EditPsychologist"
import EmptyPatient from "../../../../../assets/empty-state.svg"

export function ListPsychologist() {

  const {
    psychologists,
    psychologistBeingEdited,
    isEditModalOpen,
    handleCloseEditModal,
    handleOpenEditModal,
    isLoading
  } = UsePsychologistController()

  const hasPsychologist = psychologists.length > 0

  return(
    <div className="w-full md:h-[750px] md:relative">

      {psychologistBeingEdited && (
        <EditPsychologist 
        open={isEditModalOpen}
        onClose={handleCloseEditModal}
        psychologist={psychologistBeingEdited}
        />
      )}
      {(!hasPsychologist && !isLoading) && (
        <div className="flex flex-col items-center md:mt-32 h-full gap-4 m-2">
          <img src={EmptyPatient} alt="Empty state" className="w-32 h-32" />
          <p>Não encontramos nenhum profissional</p>
        </div>
      )}

      {psychologists.map((psychologist) => (
        <div 
        className="flex flex-1 items-center justify-between bg-card/20 rounded-md m-2 md:m-4 px-4 h-20 hover:bg-card/40 transition-all"
        key={psychologist.id}
        >
        <p className="max-w-[100px] md:min-w-[300px] whitespace-nowrap overflow-hidden">
          {psychologist.name}
        </p>

        <div className="flex">
          <Edit 
          className="cursor-pointer hover:text-secondary transition-all" 
          onClick={() => handleOpenEditModal(psychologist)}
          />
        </div>
      </div>
      ))}
    </div>
  )
}