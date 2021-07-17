import * as S from './styles'

interface LayoutProps {
  children: React.ReactNode
  isOnlyHeader?: boolean
  minus?: boolean
}

const Layout = ({ children, isOnlyHeader, minus }: LayoutProps) => {
  return (
    <S.WrapperLayout isOnlyHeader={isOnlyHeader} minus={minus}>
      {children}
    </S.WrapperLayout>
  )
}

export default Layout
