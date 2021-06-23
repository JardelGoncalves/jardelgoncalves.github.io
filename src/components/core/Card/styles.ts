import styled, { css } from 'styled-components'

type ContainerProps = {
  isColumn: boolean | undefined
  background?: string | undefined
  noPadding?: boolean | undefined
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  padding: ${({ noPadding, theme }) => (noPadding ? 0 : theme.spacing.sm)};
  flex-direction: ${({ isColumn }) => (isColumn ? 'column' : 'row')};
  ${({ background, theme }) =>
    background &&
    css`
      background-color: ${theme.colors[background]};
      border: 1px solid ${theme.colors.border};
    `}
`
