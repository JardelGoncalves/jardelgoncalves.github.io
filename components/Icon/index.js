import React from 'react';

import { Container } from './styles';

import Linkedin from './svg/linkedin.js'
import Email from './svg/email.js'
import Github from './svg/github.js'
import Moon from './svg/moon.js'

const icons = {
  github: <Github />,
  linkedin: <Linkedin />,
  email: <Email />,
  moon: <Moon />
}

export const Icon = ({ name, size }) => {
  return (
    <Container size={size}>
      {icons[name]}
    </Container>
  )
}