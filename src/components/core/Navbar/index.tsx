import Link from 'next/link'

import { ScrollIndicator } from 'components/core/ScrollIndicator'

import * as S from './styles'
import { Icon } from '../Icon/index'

interface NavbarProps {
  children: React.ReactNode
  onMinusChange?: () => void
  isLayoutAuth?: boolean
  minus?: boolean
}

export const Navbar = ({
  children,
  isLayoutAuth,
  minus,
  onMinusChange
}: NavbarProps) => {
  return (
    <>
      <S.Container
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ opacity: { duration: 0.2 } }}
      >
        {!isLayoutAuth ? (
          <S.NavWrapper>
            <img src="/images/logo.svg" alt="Logo" />
            <S.NavMenu>
              <S.NavMenuItem>
                <Link href="/">Página Inicial</Link>
              </S.NavMenuItem>
              <S.NavMenuItem>
                <Link href="#">Artigos</Link>
              </S.NavMenuItem>
              <S.NavMenuItem>
                <Link href="/about">Sobre mim</Link>
              </S.NavMenuItem>
              <S.NavMenuItem>
                <Link href="#">RSS Feed</Link>
              </S.NavMenuItem>
            </S.NavMenu>
            {children}
          </S.NavWrapper>
        ) : (
          <S.NavWrapper>
            <S.ToggleMinus minus={minus} onClick={onMinusChange}>
              <Icon name="arrow-right" />
            </S.ToggleMinus>
            <S.OptionsNavRight>
              <S.UserWrapper>
                <S.AvatarWrapper>
                  <S.Avatar
                    src="https://avatars.githubusercontent.com/u/22735511?s=400&u=cff37582d254f9103ee75a4ac0ad0e12ba8cd2fe&v=4"
                    width={96}
                    height={96}
                    objectFit="cover"
                    objectPosition="center"
                  />
                </S.AvatarWrapper>
                <S.UserInfo>
                  <S.UserName>
                    Jardel Ferreira <S.Emoji>👋</S.Emoji>
                  </S.UserName>
                  <S.Today>26 de agosto, 2021</S.Today>
                </S.UserInfo>
              </S.UserWrapper>
              {children}
            </S.OptionsNavRight>
          </S.NavWrapper>
        )}
      </S.Container>
      <ScrollIndicator
        distanceToVisible={10}
        position="fixed"
        topDistance={60}
      />
    </>
  )
}
