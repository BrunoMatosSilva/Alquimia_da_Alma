import { Button } from "@/components/Button"
import { useAppointment } from "../Appointment/useAppointment"

export function Header(){
  const { openNewAppointmentModal  } = useAppointment()

  return (
    <header className="flex flex-col md:flex-row items-center justify-between mx-4 mt-4">
        <div className="flex items-center gap-1">
          <h1 className="text-card font-semibold text-md md:text-4xl">Agendamentos</h1>
        </div>
        <div>
          <Button 
          className="flex text-base text-white bg-card"
          onClick={openNewAppointmentModal}
          >
            Novo Agendamento
          </Button>
        </div>
      </header>
  )
}