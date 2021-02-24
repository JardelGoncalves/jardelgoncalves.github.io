import React from 'react';

import { useDarkMode } from '../../utils/useDarkMode'
import { Icon } from '../Icon'

import { Container } from './styles';

export const Switch = () => {
  const [checked, toggleTheme] = useDarkMode()
  return (
  <Container checked={checked}>
    <input type="checkbox" checked={checked} onChange={toggleTheme} />
    <div className="slider">
      <Icon name="moon" size={28} />
    </div>
  </Container>
  )
}