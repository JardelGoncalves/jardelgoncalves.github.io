import { nanoid } from 'nanoid'
import Router from 'next/router'

import * as S from './styles'
import { SideItem, SideItemProps } from './SideItem/index'
import { AuthService } from '../../../../services/auth'
import { LOGIN } from 'utils/constants/site'

interface SideProps {
  minus?: boolean
  items: SideItemProps[]
}

export const Side = ({ minus, items }: SideProps) => {
  const logout = () => {
    AuthService.logout()
    Router.push(LOGIN)
  }
  return (
    <S.Wrapper>
      <SideItem noHover minus={minus} icon="logo" />
      <S.ItemsWrapper>
        {items.map((item) => (
          <SideItem
            key={nanoid()}
            text={item.text}
            to={item.to}
            noHover={item.noHover}
            minus={minus}
            icon={item.icon}
            customIcon={item.customIcon}
          />
        ))}
      </S.ItemsWrapper>
      <S.ItemsWrapper>
        <S.LogoutButton onClick={logout}>
          <SideItem minus={minus} icon="logout" text="Logout" />
        </S.LogoutButton>
      </S.ItemsWrapper>
    </S.Wrapper>
  )
}
