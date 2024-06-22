import { SideMenu } from "@/components/SideMenu";
import { Header } from "./components/Header";
import { ListPsychologist } from "./components/ListPsychologist";
import { NewPsychologist } from "./modals/NewPsychologist";
import { PsychologistProvider } from "./components/Psychologist";

export default function Psychologist() {
  return (
    <PsychologistProvider>
      <div className="w-full md:h-full rounded-md border-2 border-secondary/40 border-dotted">
          <Header />
          <main className="flex flex-1 flex-col md:flex-row md:gap-4 max-h-full mx-4">
              <div className="w-full h-full md:w-1/4 rounded-md border-2 border-secondary/40 border-dotted md:my-4 my-2">
                <SideMenu />
              </div>

              <div className="w-full h-full md:w-1/1 rounded-md border-2 border-secondary/40 border-dotted md:my-4 my-2">
                <ListPsychologist />
              </div>
          </main>
          <NewPsychologist />
      </div>
    </PsychologistProvider>
  )
}