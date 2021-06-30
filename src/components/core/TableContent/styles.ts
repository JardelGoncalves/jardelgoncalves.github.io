import { rgba } from 'polished'
import styled from 'styled-components'

export const Container = styled.nav`
  position: relative;
  max-height: 50vh;
  height: 100%;
  max-width: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  transition: all 0.2s;

  &.sticky {
    position: fixed;
    top: 120px;
  }
`

type CustomColorsProps = {
  color?: string | undefined
  activeColor?: string | undefined
}

export const Title = styled.h1<CustomColorsProps>`
  font-size: 1rem;
  font-weight: 900;
  color: ${({ theme, color }) =>
    rgba(theme.colors[color || 'description'], 0.8)};
  margin-bottom: 0.5rem;
`

type AnchorGroupProps = {
  level: number
}

export const AnchorGroup = styled.ul<AnchorGroupProps>`
  list-style: none;
  margin: 0;
  padding: 0;
  a {
    margin-left: ${({ level }) => (level ? level * 12 : 0)}px;
    font-size: ${({ level }) => (level ? 15 - level * 2 : 14)}px;
  }
`

export const AnchorGroupItem = styled.li`
  margin: 0;
  padding: 0;
`

export const Anchor = styled.a<CustomColorsProps>`
  display: block;
  font-size: 15px;
  font-weight: 500;
  color: ${({ theme, color }) =>
    rgba(theme.colors[color || 'description'], 0.8)};
  text-decoration: none;

  &:hover {
    color: ${({ theme, color }) => theme.colors[color || 'description']};
  }

  &.--active {
    color: ${({ theme, activeColor }) => theme.colors[activeColor || 'title']};
    font-weight: ${({ theme }) => theme.typography.weight.semiBold};
  }
  margin-top: 0.75rem;
`
