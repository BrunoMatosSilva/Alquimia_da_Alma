import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from "zod"
import { useMutation } from "@tanstack/react-query";
import { SigninParams } from "../../../app/services/authService/signin";
import { authService } from "../../../app/services/authService";
import { toast } from "sonner";
import { useAuth } from "@/app/hooks/useAuth";

const schema = z.object({
  email: z.string().email('Informe um e-mail válido'),
  password: z.string().min(8, 'Senha deve conter pelo menos 8 digitos'),
})

type FormData = z.infer<typeof schema>

export function useLoginController() {
  const {
    handleSubmit: hookFormHandleSubmit,
    register,
    formState: { errors },
   } = useForm<FormData>({
    resolver: zodResolver(schema)
   })

   const { isLoading, mutateAsync } = useMutation({
    mutationFn: async (data: SigninParams) => {
      return authService.signin(data);
    },
   });

   const { signin } = useAuth()

   const handleSubmit = hookFormHandleSubmit(async (data) => {
    try{
    const { accessToken } =  await mutateAsync(data);

    signin(accessToken);

    toast('Login feito com sucesso!')

    } catch {
      toast('Erro ao tentar logar!')
    }
   })

   return {handleSubmit, register, errors, isLoading}
}