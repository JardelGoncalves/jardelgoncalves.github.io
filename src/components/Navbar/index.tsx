import { useState, useEffect } from 'react'
import {} from 'framer-motion'
import Link from 'next/link'
import { Icon } from '../Icon'
import { SwitchDarkMode } from '../SwitchDarkMode'
import { Wrapper } from './styles'

export const Navbar = () => {
  const [lastYPos, setLastYPos] = useState(0)
  const [shouldShowNavbar, setShouldShowNavbar] = useState(false)

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
      <Icon name="logo" />
      <ul className="menu">
        <li className="menu__item">
          <Link href="#">Home</Link>
        </li>
        <li className="menu__item">
          <Link href="#">Posts</Link>
        </li>
        <li className="menu__item">
          <Link href="#">About</Link>
        </li>
        <li className="menu__item">
          <Link href="#">AMA</Link>
        </li>
      </ul>
      <SwitchDarkMode />
    </Wrapper>
  )
}
