import { createGlobalStyle } from 'styled-components'
import Theme from './theme'

type ThemeGlobal = Omit<typeof Theme, 'colors'>
interface ThemeStyled extends ThemeGlobal {
  colors: {
    [key: string]: string
  }
}

interface GlobalStyleProps {
  theme: ThemeStyled
}

export const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
  html {
    font-size: 16px;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 97.5%;
    }
  }

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: ${({ theme }) => theme.typography.family.primary};
    background-color: ${({ theme }) => theme.colors.bgColor};
    transition: all 0.5s;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    outline: 0;
  }
`
