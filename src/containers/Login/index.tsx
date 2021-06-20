import { Input } from 'components/core/Input'
import { Form } from 'components/core/Form'
import * as S from './styles'

export default function Login() {
  return (
    <S.Container>
      <Form width={600}>
        <S.Title>Faca login para continuar</S.Title>
        <Input placeholder="Email" />
        <Input placeholder="Senha" type="password" />
      </Form>
    </S.Container>
  )
}
