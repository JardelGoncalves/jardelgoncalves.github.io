import * as S from './styles'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => (
  <S.Wrapper>{children}</S.Wrapper>
)
