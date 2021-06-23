import styled from 'styled-components'

type ProgressContainerProps = {
  position?: 'absolute' | 'fixed' | 'relative' | undefined
  topDistance?: number | undefined
  isVisible?: boolean | undefined
}

export const ProgressContainer = styled.div<ProgressContainerProps>`
  width: 100%;
  height: 0.25rem;
  background-color: ${({ theme }) => theme.colors.border};
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  position: ${({ position }) => position || 'absolute'};
  left: 0;
  top: ${({ topDistance }) =>
    Number(topDistance) <= 0 ? 0 : `${Number(topDistance) / 16}rem`};
  transition: all 0.2s;
  z-index: 99999;
`

export const Progress = styled.div`
  height: 100%;
  width: 0%;
  background: ${({ theme }) =>
    `linear-gradient(
      90deg,
      ${theme.colors.secondary} 0%,
      ${theme.colors.primary} 100%,
    )`};
`
