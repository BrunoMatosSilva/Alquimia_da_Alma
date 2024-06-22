import { Button } from "@/components/Button"
import { Input } from "@/components/Input"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { useResetPasswordController } from "./useResetPasswordController"

export default function ResetPassword() {
  const { search } = useLocation()
  const navigate = useNavigate()

  const token = new URLSearchParams(search).get('t')

  useEffect(() => {
    if (!token) navigate('/login')
  }, [])

  const { handleSubmit, register, errors, isLoading } = useResetPasswordController(token as string)

  return(
    <div className="w-full h-[100vh] flex flex-col items-center justify-center">
      <div className="w-full max-w-[500px] mt-9 px-6 py-6 border border-border rounded-md" >
      <header className="flex flex-col gap-2">
        <h1 className="text-2xl text-secondary font-semibold tracking-[-1px]">Insira sua nova senha</h1>

        <p className="space-x-2">
          <span className="text-gray-400 tracking-[-0.5px]">
          Lembrou sua senha?
          </span>
          <Link to="/forget-password"
          className="tracking-[-0.5px] text-secondary font-medium"
          >
            Fazer Login!
          </Link>
        </p>
      </header>
      <form
      onSubmit={handleSubmit}
      className="mt-8 flex flex-col gap-4"
      >
        <Input
        type="password"
        placeholder="Nova senha"
        className="border-border"
        error={errors.newPassword?.message}
        {...register('newPassword')}
        />

        <Input
        type="password"
        placeholder="Confirme sua nova senha"
        className="border-border"
        error={errors.confirmationNewPassword?.message}
        {...register('confirmationNewPassword')}
        />

        <Button
        type="submit"
        className="mt-2 bg-secondary text-white"
        isLoading={isLoading}
        >
          Alterar senha
        </Button>
      </form>
      </div>
    </div>
  )
}