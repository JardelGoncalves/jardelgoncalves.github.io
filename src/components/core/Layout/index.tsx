import * as S from './styles'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => (
  <S.Wrapper>
    <S.Content>{children}</S.Content>
  </S.Wrapper>
)
