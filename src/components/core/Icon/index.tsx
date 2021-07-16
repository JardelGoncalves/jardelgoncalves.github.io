import * as S from './styles'

import Linkedin from './Linkedin'
import Email from './Email'
import Github from './Github'
import Moon from './Moon'
import Logo from './Logo'
import Link from './Link'
import ArrowRight from './ArrowRight'
import Dashboard from './Dashboard'
import Chat from './Chat'
import Paper from './Paper'
import Logout from './Logout'

export interface IConsElements {
  [key: string]: React.ReactNode
}

const icons: IConsElements = {
  logo: <Logo />,
  github: <Github />,
  linkedin: <Linkedin />,
  email: <Email />,
  moon: <Moon />,
  link: <Link />,
  'arrow-right': <ArrowRight />,
  dashboard: <Dashboard />,
  chat: <Chat />,
  paper: <Paper />,
  logout: <Logout />
}

export interface IConProps {
  name: string
  scale?: number | undefined
}

export const Icon = ({ name, scale }: IConProps) => {
  return <S.Wrapper scale={scale}>{icons[name]}</S.Wrapper>
}
