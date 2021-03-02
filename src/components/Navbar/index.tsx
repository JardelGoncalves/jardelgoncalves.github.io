import { useEffect, useRef } from 'react'
import { Icon } from '../Icon'
import { SwitchDarkMode } from '../SwitchDarkMode'
import { Wrapper } from './styles'

export const Navbar = () => {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    window.onscroll = () => {
      if (ref && ref.current) {
        if (
          document.body.scrollTop > 50 ||
          document.documentElement.scrollTop > 50
        ) {
          ref.current.classList.add('navbar--fixed')
        } else {
          ref.current.classList.remove('navbar--fixed')
        }
      }
    }
  }, [])
  return (
    <Wrapper ref={ref}>
      <Icon name="logo" />
      <SwitchDarkMode />
    </Wrapper>
  )
}
