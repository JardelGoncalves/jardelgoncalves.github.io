import { Layout } from '../Layout'
import * as S from './styles'

interface GridLayoutProps {
  row?: boolean
  children: React.ReactNode
}

export const GridLayout = ({ row, children }: GridLayoutProps) => {
  return (
    <S.GridLayoutWrapper row={row}>
      <S.Sidenav row={row}>menu</S.Sidenav>
      <S.Content row={row}>
        <Layout>{children}</Layout>
      </S.Content>
    </S.GridLayoutWrapper>
  )
}
