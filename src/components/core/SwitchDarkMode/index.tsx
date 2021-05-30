import { Icon } from '../Icon'

import { Container } from './styles'

interface SwitchDarkModeProps {
  isDark: boolean
  toggle: () => void
}

export const SwitchDarkMode = ({ isDark, toggle }: SwitchDarkModeProps) => {
  return (
    <Container>
      <input type="checkbox" checked={!!isDark} onChange={toggle} />
      <div className="slider">
        <Icon name="moon" size={28} />
      </div>
    </Container>
  )
}
