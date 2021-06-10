import React from 'react'

import * as S from './styles'

import Linkedin from './svg/linkedin'
import Email from './svg/email'
import Github from './svg/github'
import Moon from './svg/moon'
import Logo from './svg/logo'

export interface IConsElements {
  [key: string]: React.ReactNode
}

const icons: IConsElements = {
  logo: <Logo />,
  github: <Github />,
  linkedin: <Linkedin />,
  email: <Email />,
  moon: <Moon />
}

export interface ICon {
  name: string
  size?: number | undefined
}

export const Icon = ({ name, size }: ICon) => {
  return <S.Wrapper size={size}>{icons[name]}</S.Wrapper>
}
