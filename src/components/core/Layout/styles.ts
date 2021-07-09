import styled, { css } from 'styled-components'

type WrapperLayoutProps = {
  isOnlyHeader?: boolean | undefined
}

export const WrapperLayout = styled.main<WrapperLayoutProps>`
  height: 100vh;
  display: grid;
  ${({ isOnlyHeader }) =>
    isOnlyHeader
      ? css`
          grid-template:
            'header' 60px
            'content' 1fr
            /1fr;
        `
      : css`
          grid-template:
            'sidebar header' 60px
            'sidebar content' 1fr
            /250px 1fr;
        `}
`
