import * as S from './styles'

interface LayoutProps {
  children: React.ReactNode
  isOnlyHeader?: boolean
}

export const Layout = ({ children, isOnlyHeader }: LayoutProps) => {
  return (
    <S.WrapperLayout isOnlyHeader={isOnlyHeader}>{children}</S.WrapperLayout>
  )
}
