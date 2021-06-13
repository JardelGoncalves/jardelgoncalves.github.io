import styled, { css } from 'styled-components'

type ContainerProps = {
  isColumn: boolean | undefined
  background?: string | undefined
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  padding: 1rem;
  flex-direction: ${({ isColumn }) => (isColumn ? 'column' : 'row')};
  ${({ background, theme }) =>
    background &&
    css`
      background-color: ${theme.colors[background]};
      border: 1px solid ${theme.colors.borderColor};
    `}
`
