import { useState, useEffect } from 'react'
import Link from 'next/link'
import * as S from './styles'
import { Layout } from '../Layout'

interface NavbarProps {
  children: React.ReactNode
}

export const Navbar = ({ children }: NavbarProps) => {
  const [lastYPos, setLastYPos] = useState(0)
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
    <S.Container
      initial={{ opacity: 0 }}
      animate={{ opacity: shouldShowNavbar ? 1 : 0 }}
      transition={{ opacity: { duration: 0.2 } }}
    >
      <Layout>
        <S.NavWrapper>
          <img src="/images/logo.svg" alt="Logo" />
          <S.NavMenu className="navbar__menu">
            <S.NavMenuItem className="navbar__menu__item">
              <Link href="/">Página Inicial</Link>
            </S.NavMenuItem>
            <S.NavMenuItem className="navbar__menu__item">
              <Link href="#">Artigos</Link>
            </S.NavMenuItem>
            <S.NavMenuItem className="navbar__menu__item">
              <Link href="/about">Sobre mim</Link>
            </S.NavMenuItem>
            <S.NavMenuItem className="navbar__menu__item">
              <Link href="#">RSS Feed</Link>
            </S.NavMenuItem>
            {/* <S.NavMenuItem className="navbar__menu__item">
              <Link href="#">AMA</Link>
            </S.NavMenuItem> */}
          </S.NavMenu>
          {children}
        </S.NavWrapper>
      </Layout>
    </S.Container>
  )
}
