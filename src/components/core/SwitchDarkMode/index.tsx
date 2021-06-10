import { Icon } from '../Icon'

import * as S from './styles'

interface SwitchDarkModeProps {
  isDark: boolean
  toggle: () => void
}

export const SwitchDarkMode = ({ isDark, toggle }: SwitchDarkModeProps) => {
  return (
    <S.Container>
      <input type="checkbox" checked={!!isDark} onChange={toggle} />
      <div className="slider">
        <Icon name="moon" size={28} />
      </div>
    </S.Container>
  )
}
