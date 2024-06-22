import { Nav } from "@/Router/nav";
import { useAuth } from "@/app/hooks/useAuth";
import { cn } from "@/lib/utils";
import { Bug, CalendarDays, LogOut, User2Icon, Users2 } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export function SideMenu() {
  const {pathname} = useLocation()
  const { signout } = useAuth()

  return(
    <div className="md:h-full p-4 text-secondary">
      <h1 className="font-semibold">Menu</h1>
      <div className="flex flex-1 items-center justify-center md:justify-normal md:mt-2 md:border-t-[1px] md:border-secondary/20">
        <div className="flex md:flex-1 gap-8 md:flex-col md:gap-4 mt-2">
          <div>
            <Link to={Nav.dashboard} className={cn("flex flex-1 items-center gap-2", {
              "font-bold": pathname === Nav.dashboard
              })}>
              <User2Icon />
              <span className="hidden md:block">
                Pacientes
              </span>
            </Link>
          </div>

          <div>
          <Link to={Nav.pyschologist} className={cn("flex flex-1 items-center gap-2", {
              "font-bold": pathname === Nav.pyschologist
              })}>
              <Users2 />
              <span className="hidden md:block">
                Profissionais
              </span>
            </Link>
          </div>

          <div>
            <Link to={Nav.appointment} className={cn("flex flex-1 items-center gap-2", {
              "font-bold": pathname === Nav.appointment
              })}>
              <CalendarDays />
              <span className="hidden md:block">
                Agendamento
              </span>
            </Link>
          </div>

          <div>
          <a href="https://web.whatsapp.com/send?phone=+5511977553377" target="_blank" rel="noopener noreferrer" className="flex md:py-2 items-center md:border-y-[1px] md:border-secondary/20 gap-2">
              <Bug />
              <span className="hidden md:block">
                Suporte
              </span>
            </a>
          </div>

          <div >
            <button 
            className="flex items-center gap-2"
            onClick={signout}
            >
              <LogOut/>
              <span className="hidden md:block">
                Sair
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}