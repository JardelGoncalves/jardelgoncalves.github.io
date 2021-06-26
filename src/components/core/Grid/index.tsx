import * as S from './styles'

interface GridProps {
  children: React.ReactNode
  column?: string
}

export const Grid = ({ children, column }: GridProps) => {
  return <S.GridWrapper column={column}>{children}</S.GridWrapper>
}
