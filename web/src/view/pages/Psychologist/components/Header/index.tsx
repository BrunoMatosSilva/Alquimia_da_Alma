import { Button } from "@/components/Button";
import { usePsychologist } from "../Psychologist/usePsychologist";

export function Header(){
  const {openNewPsychologistModal} = usePsychologist()

  return (
    <header className="flex flex-col md:flex-row items-center justify-between mx-4 mt-4">
        <div className="flex items-center gap-1">
          <h1 className="text-card font-semibold text-md md:text-4xl">Profissionais</h1>
        </div>
        <div>
          <Button 
          className="flex text-base text-white bg-card"
          onClick={openNewPsychologistModal}
          >
            Novo Profissional
          </Button>
        </div>
      </header>
  )
}