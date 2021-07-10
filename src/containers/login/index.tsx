import { useForm, useWatch } from 'react-hook-form'

import { Input } from 'components/core/Input'
import { Form } from 'components/core/Form'
import { RaisedButton } from 'components/core/Button'

import * as S from './styles'

export default function Login() {
  const { register, handleSubmit, control } = useForm()

  const email = useWatch({ control, name: 'email', defaultValue: '' })
  const password = useWatch({ control, name: 'password', defaultValue: '' })

  const onSubmit = handleSubmit((data) => console.log(data))

  return (
    <S.Container>
      <Form width={600} onSubmit={onSubmit}>
        <S.Title>Faça login para continuar</S.Title>
        <Input
          {...register('email', { required: true })}
          placeholder="Email"
          type="email"
        />
        <Input
          {...register('password', { required: true })}
          placeholder="Senha"
          type="password"
        />
        <S.ButtonWrapper>
          <RaisedButton
            disabled={!(email && password)}
            type="submit"
            label="Entrar"
            width={200}
          />
        </S.ButtonWrapper>
      </Form>
    </S.Container>
  )
}
