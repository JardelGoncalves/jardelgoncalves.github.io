import styled, { css } from 'styled-components'

type GridWrapperProps = {
  column?: string | undefined
}

export const GridWrapper = styled.section<GridWrapperProps>`
  display: grid;
  ${({ column }) =>
    column &&
    css`
      grid-template-columns: ${column};
    `};
`
