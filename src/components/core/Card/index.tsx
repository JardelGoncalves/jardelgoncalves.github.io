import * as S from './styles'

interface CardProps {
  children: React.ReactNode
  isColumn?: boolean
  background?: string
  noPadding?: boolean
}

export const Card = ({
  isColumn,
  background,
  noPadding,
  children
}: CardProps) => {
  return (
    <S.Container
      noPadding={noPadding}
      isColumn={isColumn}
      background={background}
    >
      {children}
    </S.Container>
  )
}
