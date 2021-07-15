import * as S from './styles'
import { SideItem } from './SideItem/index'

interface SideProps {
  minus?: boolean
}

export const Side = ({ minus }: SideProps) => {
  return (
    <S.Wrapper>
      <SideItem noHover minus={minus} icon="logo" />
    </S.Wrapper>
  )
}
