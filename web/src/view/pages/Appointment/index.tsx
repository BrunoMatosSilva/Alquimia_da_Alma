import { SideMenu } from "@/components/SideMenu";
import { AppointmentProvider } from "./components/Appointment";
import { Header } from "./components/Header";
import { Schedule } from "./components/Schedule";
import { NewAppointment } from "./modals/NewAppointment";

export function Appointment() {
  return (
    <AppointmentProvider>
      <div className="w-full md:h-full rounded-md border-2 border-secondary/40 border-dotted">
          <Header />
          <main className="flex flex-1 flex-col md:flex-row md:gap-4 max-h-full mx-4">
              <div className="w-full h-full md:w-1/4 rounded-md border-2 border-secondary/40 border-dotted md:my-4 my-2">
                <SideMenu />
              </div>

              <div className="md:max-w-[calc(100%-262px)] w-full h-full md:w-1/1 rounded-md border-2 border-secondary/40 border-dotted md:my-4 my-2">
                <Schedule />
              </div>
          </main>
          <NewAppointment />
      </div>
    </AppointmentProvider>
  )
}