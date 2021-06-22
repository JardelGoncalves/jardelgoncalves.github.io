import * as S from './styles'

interface FormProps {
  width?: number
  children: React.ReactNode
  onSubmit?: () => void
}

export const Form = ({ children, width, onSubmit }: FormProps) => {
  return (
    <S.WrapperForm onSubmit={onSubmit} width={width}>
      {children}
    </S.WrapperForm>
  )
}
