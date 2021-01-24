import React, { useState } from 'react';

import { Icon } from '../Icon'

import { Container } from './styles';

export const Switch = () => {
  const [checked, setChecked] = useState(false) 
  return (
  <Container checked={checked}>
    <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} />
    <div className="slider">
      <Icon name="moon" size={28} />
    </div>
  </Container>
  )
}