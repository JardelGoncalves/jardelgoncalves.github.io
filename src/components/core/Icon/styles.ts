import styled from 'styled-components'

interface WrapperProps {
  size?: number | undefined
}

export const Wrapper = styled.div<WrapperProps>`
  svg {
    width: ${({ size }) => `${size || 32}px`};
    height: ${({ size }) => `${size || 32}px`};
    font-size: ${({ size }) => `${size || 32}px`};
  }
`
