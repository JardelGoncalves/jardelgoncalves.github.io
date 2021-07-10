import * as S from './styles'

interface ContentProps {
  children: React.ReactNode
  full?: boolean
  hasSide?: boolean
}

export const Content = ({ children, full, hasSide }: ContentProps) => (
  <S.Wrapper>
    <S.Content full={full} hasSide={hasSide}>
      {children}
    </S.Content>
  </S.Wrapper>
)
