import { Button } from "@/components/Button";
import { Modal } from "@/components/Modal";
import { cn } from "@/lib/utils";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useFiltersModalController } from "./useFiltersModalController";

interface FiltersModalProps {
  open: boolean;
  onClose(): void;
  onApplyFilters(filters: {
    psychologistId: string | undefined, 
    year: number, 
    month: number, 
    day: number
  }): void;
}

export function FiltersModal({open, onClose, onApplyFilters}: FiltersModalProps) {
  const {
    handleSelectPsychologist,
    handleChangeYear,
    handleChangeMonth,
    handleChangeDay,
    selectedPsychologistId,
    selectedYear,
    selectedMonth,
    selectedDay,
    psychologists
  } = useFiltersModalController()

  return(
    <Modal
    open={open}
    onClose={onClose}
    title="Filtros"
    >
      <div>
        <span className="text-lg tracking-[-1px] font-bold">
          Profissionais
        </span>

        <div className="space-y-2 mt-2 text-primary/60">
          {psychologists.map(psychologist => (
            <button
            key={psychologist.id}
            onClick={() => handleSelectPsychologist(psychologist.id)}
            className={cn(
              "p-2 rounded-2xl w-full text-left hover:bg-card/20 transition-colors",
              psychologist.id === selectedPsychologistId && "bg-card/20"
            )}
            >
              {psychologist.name}
            </button>
          ))}
        </div>

        <div className="mt-10">
        <span className="text-lg tracking-[-1px] font-bold">
          Ano
        </span>

          <div className="mt-2 w-full flex items-center justify-between">
            <button
            className="w-12 h-12 flex items-center justify-center"
            onClick={() => handleChangeYear(-1)}
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </button>

            <div className="flex-1 text-center">
              <span className="font-medium text-sm tracking-[-0.5px]">
                {selectedYear}
              </span>
            </div>

            <button
            className="w-12 h-12 flex items-center justify-center"
            onClick={() => handleChangeYear(+1)}
            >
            <ChevronRightIcon className="w-6 h-6" />
          </button>
          </div>
        </div>

        <div className="mt-4">
        <span className="text-lg tracking-[-1px] font-bold">
          Mês
        </span>

          <div className="mt-2 w-full flex items-center justify-between">
            <button
            className="w-12 h-12 flex items-center justify-center"
            onClick={() => handleChangeMonth(-1)}
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </button>

            <div className="flex-1 text-center">
              <span className="font-medium text-sm tracking-[-0.5px]">
                {selectedMonth}
              </span>
            </div>

            <button
            className="w-12 h-12 flex items-center justify-center"
            onClick={() => handleChangeMonth(+1)}
            >
            <ChevronRightIcon className="w-6 h-6" />
          </button>
          </div>
        </div>

        <div className="mt-4">
        <span className="text-lg tracking-[-1px] font-bold">
          Dia
        </span>

          <div className="mt-2 w-full flex items-center justify-between">
            <button
            className="w-12 h-12 flex items-center justify-center"
            onClick={() => handleChangeDay(-1)}
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </button>

            <div className="flex-1 text-center">
              <span className="font-medium text-sm tracking-[-0.5px]">
                {selectedDay}
              </span>
            </div>

            <button
            className="w-12 h-12 flex items-center justify-center"
            onClick={() => handleChangeDay(+1)}
            >
            <ChevronRightIcon className="w-6 h-6" />
          </button>
          </div>
        </div>

        <Button
        className="w-full mt-10 text-white bg-secondary"
        onClick={() => onApplyFilters({
          psychologistId: selectedPsychologistId,
          year: selectedYear,
          month: selectedMonth,
          day: selectedDay
        })}
        >
          Aplicar Filtros
        </Button>
      </div>
    </Modal>
  )
}