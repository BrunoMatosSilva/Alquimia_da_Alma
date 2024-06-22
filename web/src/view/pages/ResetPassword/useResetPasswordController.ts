import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useMutation } from '@tanstack/react-query'
import { authService } from '../../../app/services/authService'
import { useNavigate } from 'react-router-dom'
import { ResetParams } from '../../../app/services/authService/reset'
import { toast } from 'sonner'

const schema = z
  .object({
    newPassword: z.string()
      .nonempty('Senha é obrigatória')
      .min(8, 'Senha deve conter pelo menos 8 dígitos'),
    confirmationNewPassword: z.string()
      .nonempty('Senha é obrigatória')
      .min(8, 'Senha deve conter pelo menos 8 dígitos'),
  })
  .refine((data) => data.newPassword === data.confirmationNewPassword, {
    message: 'Senhas não combinam',
    path: ['confirmationNewPassword']
  })

type FormData = z.infer<typeof schema>


export function useResetPasswordController(token: string) {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit: hookFormSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>({
    resolver: zodResolver(schema)
  })

  const { mutateAsync, isLoading } = useMutation({
    mutationKey: ['reset-password'],
    mutationFn: async (data: ResetParams) => {
      return authService.reset(data)
    },
  })

  const handleSubmit = hookFormSubmit(async (data) => {
    try {
      await mutateAsync({ ...data, token })
      toast('Senha alterada com sucesso!')
      navigate('/login')
    } catch {
      toast('O link expirou!')
      reset()
    }
  })

  return { register, handleSubmit, errors, isLoading }
}