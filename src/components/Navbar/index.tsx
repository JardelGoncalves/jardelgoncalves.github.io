import { useState, useEffect } from 'react'
import {} from 'framer-motion'
import Link from 'next/link'
import { SwitchDarkMode } from '../SwitchDarkMode'
import { Wrapper } from './styles'

export const Navbar = () => {
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
    <Wrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: shouldShowNavbar ? 1 : 0 }}
      transition={{ opacity: { duration: 0.2 } }}
    >
      <img src="/images/logo.svg" alt="Logo" />
      <ul className="menu">
        <li className="menu__item">
          <Link href="/">Página Inicial</Link>
        </li>
        <li className="menu__item">
          <Link href="#">Artigos</Link>
        </li>
        <li className="menu__item">
          <Link href="/about">Sobre mim</Link>
        </li>
        <li className="menu__item">
          <Link href="#">RSS Feed</Link>
        </li>
        {/* <li className="menu__item">
          <Link href="#">AMA</Link>
        </li> */}
      </ul>
      <SwitchDarkMode />
    </Wrapper>
  )
}
