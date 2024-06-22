import { Archive, Edit } from "lucide-react";
import {
  Pagination,
  PaginationButton,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { NewPatientModal } from "../../modals/NewPatient";
import { UsePatientsController } from "./usePatientsController";
import { EditPatientModal } from "../../modals/EditPatient";
import EmptyPatient from "../../../../../assets/empty-state.svg";
import { NewFileModal } from "../../modals/NewFile";
import { useNewFileModalController } from "../../modals/NewFile/useNewFileModalController";
import { Spinner } from "@/components/Spinner";

export function Patients() {
  const {
    patients,
    pagination,
    patientBeingEdited,
    handleCloseEditModal,
    isEditModalOpen,
    handleOpenEditModal,
    isLoading,
    isInitialLoading
  } = UsePatientsController();

  const { 
    handleOpenNewFileModal,
    isOpenNewFileModal,
    handleCloseNewFileModal,
    patientBeingFile,
    patientId,
  } = useNewFileModalController();

  const hasPatient = patients && patients.length > 0;

  return (
    <div className="w-full md:h-[750px] md:relative">
      <NewPatientModal />


      {isInitialLoading && (
        <div className="w-full h-full flex items-center justify-center">
        <Spinner className="text-primary-foreground fill-primary/50 h-10 w-10"/>
        </div>
      )}

      {!isInitialLoading && (
        <>
        <NewFileModal 
        open={isOpenNewFileModal}
        onClose={handleCloseNewFileModal}
        file={patientBeingFile}
        patientId={patientId}
      />
      
      {patientBeingEdited && (
        <EditPatientModal 
          open={isEditModalOpen}
          onClose={handleCloseEditModal}
          patient={patientBeingEdited}
        />
      )}
      {(!hasPatient && !isLoading) && (
        <div className="flex flex-col items-center md:mt-32 h-full gap-4 m-2">
          <img src={EmptyPatient} alt="Empty state" className="w-32 h-32" />
          <p>Não encontramos nenhum paciente</p>
        </div>
      )}
      {patients.map((patient) => (
        <div 
          className="flex flex-1 items-center justify-between bg-card/20 rounded-md m-2 md:m-4 px-4 h-20 hover:bg-card/40 transition-all"
          key={patient.id}
        >
          <p className="max-w-[100px] md:min-w-[300px] whitespace-nowrap overflow-hidden">{patient.name}</p>
          <div className="flex gap-4">
            <Archive 
              className="cursor-pointer hover:text-secondary transition-all" 
              onClick={() => handleOpenNewFileModal(patient.id)} 
            />
            <Edit 
              className="cursor-pointer hover:text-secondary transition-all" 
              onClick={() => handleOpenEditModal(patient)} 
            />
          </div>
        </div>
      ))}
      {hasPatient && (
        <div className="md:absolute bottom-0 w-full flex flex-col align-end mb-4">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious 
                  onClick={pagination.handlePreviousPage}
                  disabled={!pagination.hasPreviousPage}
                  className="disabled:cursor-not-allowed"
                />
              </PaginationItem>
              {Array.from({ length: pagination.totalPage }).map((_, index) => (
                <PaginationItem key={index}>
                  <PaginationButton 
                    onClick={() => pagination.handleSetPage(index + 1)}
                    isActive={pagination.pagination === index + 1}
                  >
                    {index + 1}
                  </PaginationButton>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext 
                  onClick={pagination.handleNextPage}
                  disabled={!pagination.hasNextPage}
                  className="disabled:cursor-not-allowed"
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
      </>
      )}

    </div>
  );
}
