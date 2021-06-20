import * as S from './styles'

interface FormProps {
  width?: number
  children: React.ReactNode
}

export const Form = ({ children, width }: FormProps) => {
  return <S.WrapperForm width={width}>{children}</S.WrapperForm>
}
