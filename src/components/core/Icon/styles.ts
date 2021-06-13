import styled from 'styled-components'

interface WrapperProps {
  scale?: number | undefined
}

export const Wrapper = styled.div<WrapperProps>`
  svg {
    transform: ${({ scale }) => `scale(${scale || 0.85})`};
  }
`
