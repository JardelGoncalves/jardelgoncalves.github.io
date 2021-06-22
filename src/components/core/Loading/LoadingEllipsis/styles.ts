import styled, { keyframes } from 'styled-components'

const ellipsisAnimation1 = keyframes`
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`

const ellipsisAnimation2 = keyframes`
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
`

const ellipsisAnimation3 = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`

type EllipsisProps = {
  size?: number | undefined
  color?: string | undefined
}

export const EllipsisContainer = styled.div<EllipsisProps>`
  display: inline-block;
  position: relative;
  width: 70px;
  height: 70px;

  div {
    position: absolute;
    top: 33px;
    width: ${({ size }) => (size ? `${size}px` : '0.5rem')};
    height: ${({ size }) => (size ? `${size}px` : '0.5rem')};
    border-radius: 50%;
    background: ${({ theme, color }) => theme.colors[color || 'white']};
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }
  div:nth-child(1) {
    left: 8px;
    animation: ${ellipsisAnimation1} 0.6s infinite;
  }

  div:nth-child(2) {
    left: 8px;
    animation: ${ellipsisAnimation2} 0.6s infinite;
  }

  div:nth-child(3) {
    left: 32px;
    animation: ${ellipsisAnimation2} 0.6s infinite;
  }

  div:nth-child(4) {
    left: 56px;
    animation: ${ellipsisAnimation3} 0.6s infinite;
  }
`
