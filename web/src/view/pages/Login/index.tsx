import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Link } from "react-router-dom";
import { useLoginController } from "./useLoginController";
import Logo_AF  from "../../../assets/afetividade_logo.png"

export default function Login() {
  const { handleSubmit, register, errors, isLoading } = useLoginController()

  return(
    <div className="w-full h-[100vh] flex flex-col items-center justify-center">
      <img src={Logo_AF} className="w-[420px]" />
      <div className="w-full max-w-[500px] mt-9 px-6 py-6 border border-card/20 rounded-md" >
      <header className="flex flex-col gap-2">
        <h1 className="text-2xl text-secondary font-semibold tracking-[-1px]">Entre no Sistema</h1>

        <p className="space-x-2">
          <span className="text-gray-400 tracking-[-0.5px]">
            Não lembra a sua senha?
          </span>
          <Link to="/forget-password"
          className="tracking-[-0.5px] text-secondary font-medium"
          >
            Recupere aqui!
          </Link>
        </p>
      </header>
      <form
      onSubmit={handleSubmit}
      className="mt-8 flex flex-col gap-4"
      >
        <Input
        type="email"
        placeholder="E-mail"
        className="border-border"
        error={errors.email?.message}
        {...register('email')}
        />

        <Input
        type="password"
        placeholder="Senha"
        className="border-border"
        error={errors.password?.message}
        {...register('password')}
        />

        <Button
        type="submit"
        className="mt-2 bg-secondary text-white"
        isLoading={isLoading}
        >
          Entrar
        </Button>
      </form>
      </div>
    </div>
  )
}