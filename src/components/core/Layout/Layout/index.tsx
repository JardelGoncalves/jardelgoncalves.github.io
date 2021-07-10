import * as S from './styles'

interface LayoutProps {
  children: React.ReactNode
  isOnlyHeader?: boolean
}

const Layout = ({ children, isOnlyHeader }: LayoutProps) => {
  return (
    <S.WrapperLayout isOnlyHeader={isOnlyHeader}>{children}</S.WrapperLayout>
  )
}

export default Layout
