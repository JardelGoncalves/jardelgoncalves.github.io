import styled, { css } from 'styled-components'

export const WrapperSyntax = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  pre {
    transition: all 0.9s;
    margin-top: 0 !important;
    z-index: 2 !important;
  }
`

export const LanguageWrapper = styled.nav`
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
  padding: 0;
  margin: 0;
  margin-bottom: -4px;
  padding-right: 2rem;
  z-index: 1;
`

type LanguageProps = {
  clickable: boolean
  active: boolean
}

export const Language = styled.button<LanguageProps>`
  height: 2.5rem;
  padding: 0 1rem;
  border: none;
  background-color: #282a36;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;

  color: #9ca8b4;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 0.875rem;
  ${({ theme, clickable, active }) => {
    if (!clickable) return
    if (!active) return
    return css`
      background-color: ${theme.colors.primary};
      color: ${theme.colors.white};
    `
  }}

  cursor: ${({ clickable }) => (clickable ? 'pointer' : 'default')};
`
