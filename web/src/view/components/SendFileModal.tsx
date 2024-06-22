import { Modal } from "@/components/Modal";
import { useNewFileModalController } from "../pages/Dashboard/modals/NewFile/useNewFileModalController";
import { Spinner } from "@/components/Spinner";

interface SendFileModalProps {
  onClose(): void;
  title: string;
  isLoading: boolean;
  patientId: string
}

export function SendFileModal({onClose, title, isLoading, patientId}: SendFileModalProps) {

  const {
    register,
    errors,
    handleSubmit
  } = useNewFileModalController()

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSubmit(event, patientId);
  };

  console.log(isLoading)

  return(
    <Modal 
    title={title}
    onClose={onClose}
    open
    >
      <form onSubmit={onSubmit} className="flex flex-col gap-2">
        <input
        {...register('file')}
        type="file"
        className="file:bg-secondary file:border-none file:p-2 file:text-white file:rounded-md file:hover:bg-secondary/80 file:transition-all file:cursor-pointer"
        />
        {errors.file?.message && (
          <p className="text-red-600">{errors.file.message}</p>
        )}
        <button
        className="p-2 h-12 bg-secondary rounded-md flex justify-center items-center text-white font-semibold hover:bg-secondary/80 transition-all"
        >
          {!isLoading && "Enviar"}
          {isLoading && <Spinner className="w-6 h-6" />}
        </button>
      </form>
    </Modal>
  )
}