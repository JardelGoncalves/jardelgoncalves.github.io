import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { Input } from 'components/core/Input'
import { Form } from 'components/core/Form'
import { RaisedButton } from 'components/core/Button'

import * as S from './styles'
import { AuthService } from '../../services/auth'

const schema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required()
})

type UseForm = {
  email: string
  password: string
}

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<UseForm>({
    resolver: yupResolver(schema),
    defaultValues: { email: '', password: '' }
  })

  const onSubmit = handleSubmit(async (data) => AuthService.signIn(data))

  return (
    <S.Container>
      <Form width={600} onSubmit={onSubmit}>
        <S.Title>Faça login para continuar</S.Title>
        <Input
          {...register('email')}
          placeholder="Email"
          type="email"
          error={errors?.email?.message}
        />
        <Input
          {...register('password')}
          placeholder="Senha"
          type="password"
          error={errors?.password?.message}
        />
        <S.ButtonWrapper>
          <RaisedButton type="submit" label="Entrar" width={200} />
        </S.ButtonWrapper>
      </Form>
    </S.Container>
  )
}
