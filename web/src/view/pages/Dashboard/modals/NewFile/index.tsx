import { Modal } from "@/components/Modal";
import { TrashIcon } from "lucide-react";
import { Files } from "@/app/entities/Files";
import EmptyFile from "../../../../../assets/empty-file-state.svg";
import { useNewFileModalController } from "./useNewFileModalController";
import { SendFileModal } from "@/view/components/SendFileModal";
import { ConfirmDeleteModal } from "@/view/components/ConfirmDeleteModal";
import { useFiles } from "@/app/hooks/useFiles";

interface EditNewFileModalProps {
  open: boolean;
  onClose(): void;
  file: Files | null;
  patientId: string;
}

export function NewFileModal({ open, patientId, onClose }: EditNewFileModalProps) {

  const {
    handleDownloadFile,
    isOpenSendFileModal,
    handleCloseSendModal,
    handleOpenSendModal,
    isDeleteModalOpen,
    handleOpenDeleteModal,
    handleCloseDeleteModal,
    handleDeleteFile,
    fileId,
    fileName,
    isLoadingDeleteFile,
  } = useNewFileModalController()

  const { files, isLoading } = useFiles(open ? patientId: "");

  const hasFile = files && files?.length > 0;

  

  if(isOpenSendFileModal){
    return <SendFileModal 
    title="Enviar Documento"
    onClose={handleCloseSendModal}
    isLoading={isLoading}
    patientId={patientId}
    />
  }

  if (isDeleteModalOpen) {
    return <ConfirmDeleteModal 
    title="Tem certeza que deseja excluir este arquivo?"
    onClose={handleCloseDeleteModal}
    onConfirme={() => handleDeleteFile({
      PatientId:patientId, 
      OriginalFileName:fileName, 
      id:fileId
    })}
    isLoading={isLoadingDeleteFile}
    />
  }

  return (
    <div>
    <Modal
    title="Arquivos"
    open={open}
    onClose={onClose}
    >
      <div className="flex items-center justify-center">
      <button
        className="p-2 h-12 bg-secondary rounded-md text-white font-semibold hover:bg-secondary/80 transition-all"
        onClick={handleOpenSendModal}
        >
          Adicionar Novo Arquivo
        </button>
      </div>

      <div className="rounded-md border mt-2 h-64 overflow-y-auto">

        {!hasFile && (
          <div className="flex flex-col items-center gap-4 m-2">
            <img src={EmptyFile} alt="Empty file state" className="w-32 h-32" />
            <p>Não encontramos nenhum arquivo</p>
          </div>
        )}

        {files?.map((file) => (
          <div key={file.id} className="flex bg-card/20 m-2 justify-between p-2 rounded-md">
          <p 
          className="underline font-light cursor-pointer"
          onClick={() => handleDownloadFile({
            id: file.id, 
            PatientId:file.patientId, 
            OriginalFileName:file.originalFileName
          })}
          >
            {file.originalFileName}
          </p>
          <TrashIcon 
          className="text-red-600 cursor-pointer"
          onClick={() => handleOpenDeleteModal({
            id: file.id, 
            PatientId: file.patientId, 
            OriginalFileName: file.originalFileName
          })}
          />
        </div>
        ))}
      </div>
    </Modal>
    </div>
  )
}