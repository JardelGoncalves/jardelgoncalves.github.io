import * as S from './styles'

interface CardProps {
  children: React.ReactNode
  isColumn?: boolean
  background?: string
}

export const Card = ({ isColumn, background, children }: CardProps) => {
  return (
    <S.Container isColumn={isColumn} background={background}>
      {children}
    </S.Container>
  )
}
