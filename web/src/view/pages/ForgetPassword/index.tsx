import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Link } from "react-router-dom";
import { useForgetPasswordController } from "./useForgetPasswordControllet";

export default function ForgetPassword() {
  const { register, handleSubmit, errors, isLoading } = useForgetPasswordController();

  return(
    <div className="w-full h-[100vh] flex flex-col items-center justify-center">
      <div className="w-full max-w-[500px] mt-9 px-6 py-6 border border-border rounded-md" >
      <header className="flex flex-col gap-2">
        <h1 className="text-2xl text-secondary font-semibold tracking-[-1px]">Esqueci minha senha</h1>

        <p className="space-x-2">
          <span className="text-gray-400 tracking-[-0.5px]">
            Lembrou sua senha?
          </span>
          <Link to="/"
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
        type="email"
        placeholder="E-mail"
        className="border-border"
        error={errors.email?.message}
        {...register('email')}
        />

        <Button
        type="submit"
        className="mt-2 bg-secondary text-white"
        isLoading={isLoading}
        >
          Enviar
        </Button>
      </form>
      </div>
    </div>
  )
}