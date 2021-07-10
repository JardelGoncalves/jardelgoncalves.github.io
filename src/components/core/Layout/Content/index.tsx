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
      <S.Footer />
    </S.Content>
  </S.Wrapper>
)
