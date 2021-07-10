import { useState, useEffect } from 'react'
import Link from 'next/link'

import { ScrollIndicator } from 'components/core/ScrollIndicator'

import * as S from './styles'

interface NavbarProps {
  children: React.ReactNode
}

export const Navbar = ({ children }: NavbarProps) => {
  const [lastYPos, setLastYPos] = useState(30)
  const [shouldShowNavbar, setShouldShowNavbar] = useState(true)

  useEffect(() => {
    const handlerScroll = () => {
      const yPos = window.scrollY
      const isScrollingUp = yPos < lastYPos
      setShouldShowNavbar(isScrollingUp)
      setLastYPos(yPos)
    }

    window.addEventListener('scroll', handlerScroll, false)
    return () => {
      window.removeEventListener('scroll', handlerScroll, false)
    }
  }, [lastYPos])

  return (
    <>
      <S.Container
        initial={{ opacity: 0 }}
        animate={{
          opacity: shouldShowNavbar ? 1 : 0,
          visibility: shouldShowNavbar ? 'visible' : 'hidden'
        }}
        transition={{ opacity: { duration: 0.2 } }}
        withBackdrop={lastYPos >= 30}
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
            {/* <S.NavMenuItem>
              <Link href="#">AMA</Link>
            </S.NavMenuItem> */}
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
