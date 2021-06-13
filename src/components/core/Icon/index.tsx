import * as S from './styles'

import Linkedin from 'static/icons/linkedin.svg'
import Email from 'static/icons/email.svg'
import Github from 'static/icons/github.svg'
import Moon from 'static/icons/moon.svg'
import Logo from 'static/logo.svg'

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

export interface IConProps {
  name: string
  scale?: number | undefined
}

export const Icon = ({ name, scale }: IConProps) => {
  return <S.Wrapper scale={scale}>{icons[name]}</S.Wrapper>
}
