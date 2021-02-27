import { Icon } from '../Icon'
import { SwitchDarkMode } from '../SwitchDarkMode'
import { Wrapper } from './styles'

export const Navbar = () => {
  return (
    <Wrapper>
      <Icon name="logo" />
      <SwitchDarkMode />
    </Wrapper>
  )
}
