import * as S from './styles'

interface LayoutProps {
  children: React.ReactNode
  full?: boolean
}

export const Layout = ({ children, full }: LayoutProps) => (
  <S.Wrapper>
    <S.Content full={full}>{children}</S.Content>
  </S.Wrapper>
)
