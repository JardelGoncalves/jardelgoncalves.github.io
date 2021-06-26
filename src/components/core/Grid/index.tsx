import * as S from './styles'

interface GridProps {
  children: React.ReactNode
  column?: string
}

export const Grid = ({ children, column }: GridProps) => {
  return (
    <S.GridWrapper className="grid-template-columns" column={column}>
      {children}
    </S.GridWrapper>
  )
}
