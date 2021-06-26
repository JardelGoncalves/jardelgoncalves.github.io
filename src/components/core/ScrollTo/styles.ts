import styled, { keyframes } from 'styled-components'

const moveDown = keyframes`
	0% {
		transform: translate(0);
	}
	20% {
		transform: translateY(15px);
	}
	40% {
		transform: translate(0);
	}
`

export const Wrapper = styled.a`
  position: relative;
  display: inline-block;
  cursor: pointer;
  width: 3rem;
  height: 3rem;
`

export const ArrowToDown = styled.div`
  width: 3rem;
  height: 3rem;
  border: 2px solid ${({ theme }) => theme.colors.text};
  border-radius: 50%;
  position: relative;
  animation: ${moveDown} 1.5s infinite;
  &::before {
    content: '';
    position: absolute;
    top: 0.75rem;
    left: 0.875rem;
    width: 0.75rem;
    height: 0.75rem;
    border-left: 2px solid ${({ theme }) => theme.colors.text};
    border-bottom: 2px solid ${({ theme }) => theme.colors.text};
    transform: rotate(-45deg);
  }
`
