import { ModeToggle } from "@/components/ModeToggle";
import { Link, Outlet } from "react-router-dom";
import logo from "../../assets/afetividade.png"
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useAuth } from "@/app/hooks/useAuth";

export function AuthLayout() {
  const { user } = useAuth()
  
  return(
    <div className="flex w-full h-full items-center justify-center">
      <div className="w-full h-full flex justify-center items-center flex-col">
        <header className="w-full">
          <div className='flex w-full justify-between items-center px-4 md:px-8 py-2'>
            <Link to="/">
              <img src={logo} className="w-12 md:w-14" />
            </Link>
            <span className="flex gap-4">
              <ModeToggle/>
              <Avatar>
                <AvatarFallback className="border-secondary/30 border bg-white text-secondary font-semibold">
                  {user?.name.slice(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
            </span>

          </div>
        </header>
          <div className="w-full h-full flex justify-center items-center flex-col gap-16">
            <div className="w-full px-4">
              <Outlet />
            </div>
        </div>
      </div>
    </div>
  )
}