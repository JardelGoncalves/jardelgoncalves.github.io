import { Input } from 'components/core/Input'
import { Form } from 'components/core/Form'
import * as S from './styles'
import { RaisedButton } from 'components/core/Button'

export default function Login() {
  return (
    <S.Container>
      <Form width={600}>
        <S.Title>Faça login para continuar</S.Title>
        <Input placeholder="Email" type="email" />
        <Input placeholder="Senha" type="password" />
        <S.ButtonWrapper>
          <RaisedButton label="Entrar" width={200} />
        </S.ButtonWrapper>
      </Form>
    </S.Container>
  )
}
