import styled, { css } from 'styled-components'

type GridProps = {
  row?: boolean | undefined
}

export const GridLayoutWrapper = styled.main<GridProps>`
  display: grid;
  grid-template-columns: 70px 1fr;
  ${({ row }) =>
    row
      ? css`
          grid-template-rows: 70px 1fr;
          grid-template-columns: none;
          grid-template-areas:
            'sidenav'
            'content';
        `
      : css`
          grid-template-columns: 70px 1fr;
          grid-template-areas: 'sidenav content';
        `}

  transition: all 0.3s;
  overflow: hidden;

  ${({ theme }) => theme.breakpoints.lessThan('medium')`
    grid-template-rows: 70px 1fr;
    grid-template-columns: none;
    grid-template-areas:
      "sidenav"
      "content"
    ;
  `}
`

export const Sidenav = styled.nav<GridProps>`
  grid-area: sidenav;
  width: 100%;
  height: ${({ row }) => (row ? '70px' : '100vh')};

  ${({ theme }) => theme.breakpoints.lessThan('medium')`
    height: 70px;
  `}
`

export const Content = styled.section<GridProps>`
  grid-area: content;
  width: 100%;
  height: ${({ row }) => (row ? 'calc(100vh - 70px)' : '100vh')};
  overflow-y: auto;

  ${({ theme }) => theme.breakpoints.lessThan('medium')`
    height: calc(100vh - 70px);
  `}
`
