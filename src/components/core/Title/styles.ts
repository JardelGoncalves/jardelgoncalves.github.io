import styled from 'styled-components'

interface TitleProps {
  weight?: string | undefined
  size?: string | undefined
  color?: string | undefined
  as?: string | undefined
}

export const TitleWrapper = styled.h1<TitleProps>`
  position: relative;
  font-weight: ${({ theme, weight }) =>
    theme.typography.weight[weight || 'bold']};
  font-size: ${({ theme, size }) => theme.typography.sizes[size || '2xl']};
  color: ${({ theme, color }) => theme.colors[color || 'title']};

  &:hover {
    a {
      opacity: 1;
    }
  }
  a {
    opacity: 0;
    position: absolute;
    left: -2rem;
    top: 0;
    bottom: 0;
    margin: auto 0;
    text-decoration: none;
    transition: opacity 0.2s;
  }
`
