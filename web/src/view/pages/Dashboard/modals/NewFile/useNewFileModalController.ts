import { z } from "zod";
import { Files } from "@/app/entities/Files";
import { FileService } from "@/app/services/fileService";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { DownloadParams, download } from "@/app/services/fileService/download";
import { toast } from "sonner";
import { DeleteFileParams } from "@/app/services/fileService/delete";

const schema = z.object({
  file: z
    .instanceof(FileList)
    .refine((file) => file?.length == 1, 'Arquivo é obrigatorio.')
});

type FileData = z.infer<typeof schema>

export function useNewFileModalController() {

  const [isOpenNewFileModal, setIsOpenNewFileModal] = useState(false)
  const [isOpenSendFileModal, setIsSendNewFileModal] = useState(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const {isLoading, mutateAsync} = useMutation(FileService.getAll)
  const [patientBeingFile, setPatientBeingFile] = useState<Files | null>(null);
  const [patientId, setPatientId] = useState<string>("");
  const [fileId, setFileId] = useState<string>("");
  const [fileName, setFileName] = useState<string>("");
  const {isLoading: isLoadingDeleteFile, mutateAsync: removeFile } = useMutation(FileService.remove)

  const queryClient = useQueryClient()
  
  const {
    register,
    handleSubmit: hookFileHandleSubmit,
    formState: { errors },
    reset
  } = useForm<FileData>({
    resolver: zodResolver(schema)
  })

  const handleOpenNewFileModal = useCallback(async (patientId: string) => {
    const files = await mutateAsync(patientId);
    setPatientId(patientId)
    setPatientBeingFile(files ?? null);
    setIsOpenNewFileModal(true);
  }, []);

  const handleCloseNewFileModal = useCallback(() => {
    setPatientBeingFile(null);
    setPatientId("")
    setIsOpenNewFileModal(false);
  }, []);

  const handleOpenSendModal = useCallback(() => {
    setIsSendNewFileModal(true)
   },[])

   const handleCloseSendModal = useCallback(() => {
    setIsSendNewFileModal(false)
   },[])

   const handleOpenDeleteModal = useCallback(({
    id,
    PatientId,
    OriginalFileName,
  }:DeleteFileParams) => {
    setFileId(id)
    setPatientId(PatientId)
    setFileName(OriginalFileName)
    setIsDeleteModalOpen(true)
   },[])

   const handleCloseDeleteModal = useCallback(() => {
    setFileId("")
    setPatientId("")
    setFileName("")
    setIsDeleteModalOpen(false)
   },[])

   const handleSubmit = (event: React.FormEvent<HTMLFormElement>, patientId: string) => {
    hookFileHandleSubmit(async (formData) => {
      try {
          const file = formData.file[0];
          await FileService.create(patientId, file);

        queryClient.invalidateQueries({ queryKey: ['files']})
          toast('Arquivo enviado');
          handleCloseSendModal()
          reset()
      } catch (error) {
        toast('Erro ao enviar arquivo!');
      }
    })(event);
  };

  const handleDownloadFile = useCallback(async ({
    id, 
    PatientId, 
    OriginalFileName
  }: DownloadParams) => {
    try {
    const response = await download({
      id,
      PatientId,
      OriginalFileName
    });

    const url = window.URL.createObjectURL(new Blob([response]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', OriginalFileName);
      document.body.appendChild(link);
      link.click();

      link.parentNode?.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error during file download:", error);
      toast('Erro ao baixar arquivo!');
    }
  },[])

  const handleDeleteFile = useCallback(async ({
    id, 
    PatientId, 
    OriginalFileName
  }:DeleteFileParams) => {
    try {
      await removeFile({
        id,
        PatientId,
        OriginalFileName
      })

      queryClient.invalidateQueries({ queryKey: ['files']})
      toast('Arquivo deletado com sucesso!');
      handleCloseDeleteModal()
    } catch {
      toast('Erro ao deletar arquivo!');
    }
  },[])

  return {
    isOpenNewFileModal,
    handleOpenNewFileModal,
    handleCloseNewFileModal,
    patientBeingFile,
    isLoading,
    register,
    handleSubmit,
    handleDownloadFile,
    errors,
    handleCloseSendModal,
    handleOpenSendModal,
    isOpenSendFileModal,
    patientId,
    isDeleteModalOpen,
    handleCloseDeleteModal,
    handleOpenDeleteModal,
    handleDeleteFile,
    fileId,
    fileName,
    isLoadingDeleteFile,
  }
}