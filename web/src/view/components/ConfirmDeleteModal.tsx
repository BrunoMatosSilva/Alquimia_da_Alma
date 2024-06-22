import { Button } from "@/components/Button";
import { Modal } from "@/components/Modal";
import { TrashIcon } from "lucide-react";

interface ConfirmDeleteModalProps {
  onConfirme(): void;
  onClose(): void;
  title: string;
  description?: string;
  isLoading: boolean;
}

export function ConfirmDeleteModal({onConfirme, onClose, title, description, isLoading }: ConfirmDeleteModalProps) {
  return (
    <Modal open title="Excluir" onClose={onClose}>
      <div className="flex flex-col items-center text-center gap-6">
        <div className="w-[52px] h-[52px] rounded-full bg-red-50 flex items-center justify-center">
          <TrashIcon className="w-6 h-6 text-red-600" />
        </div>

        <p className="w-[180px] text-primary tracking-[-0.5px] font-bold">
          {title}
          </p>

        {description && (
          <p className="text-primary/60 tracking-[-0.5px]">
            {description}
          </p>
        )}
      </div>

      <div className="mt-10 space-y-4">
        <Button
        className="w-full text-white"
        danger
        onClick={onConfirme}
        isLoading={isLoading}
        >
          Sim, desejo excluir
        </Button>
        <Button
        className="w-full text-background bg-primary"
        disabled={isLoading}
        onClick={onClose}
        >
          Cancelar
        </Button>
      </div>
    </Modal>
  )
}