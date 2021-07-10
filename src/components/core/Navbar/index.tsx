import Link from 'next/link'

import { ScrollIndicator } from 'components/core/ScrollIndicator'

import * as S from './styles'

interface NavbarProps {
  children: React.ReactNode
}

export const Navbar = ({ children }: NavbarProps) => {
  return (
    <>
      <S.Container
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ opacity: { duration: 0.2 } }}
      >
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
      </S.Container>
      <ScrollIndicator
        distanceToVisible={10}
        position="fixed"
        topDistance={60}
      />
    </>
  )
}
