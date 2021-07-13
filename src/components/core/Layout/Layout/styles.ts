import styled, { css } from 'styled-components'

type WrapperLayoutProps = {
  isOnlyHeader?: boolean | undefined
  minus?: boolean | undefined
}

export const WrapperLayout = styled.main<WrapperLayoutProps>`
  height: 100vh;
  display: grid;
  ${({ isOnlyHeader, minus }) =>
    isOnlyHeader
      ? css`
          grid-template:
            'header' 60px
            'content' 1fr
            /1fr;
        `
      : css`
          grid-template:
            'side header'
            'side content';
          grid-template-rows: 60px 1fr;
          grid-template-columns: ${minus ? '100px' : '220px'} 1fr;
        `}
`
