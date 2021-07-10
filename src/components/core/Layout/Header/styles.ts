import styled, { css } from 'styled-components'

type HeaderProps = {
  full?: boolean | undefined
  hasSide?: boolean | undefined
}

export const Wrapper = styled.header<HeaderProps>`
  grid-area: header;
  display: flex;
  ${({ hasSide }) =>
    !hasSide &&
    css`
      justify-content: center;
    `}

  width: 100%;
`

export const WrapperHeader = styled.nav<HeaderProps>`
  grid-area: header;

  display: flex;
  max-width: ${({ theme, full, hasSide }) =>
    full || hasSide ? '100%' : theme.sizes.portView};
  width: 100%;
  padding: ${({ full, hasSide }) => (full ? 0 : hasSide ? '0 2rem' : '0 7rem')};

  ${({ theme, full, hasSide }) => theme.breakpoints.lessThan('huge')`
    padding: ${full ? '0' : hasSide ? '0 1.675rem' : '0 6.1875rem'};
  `}
  ${({ theme, full, hasSide }) => theme.breakpoints.lessThan('large')`
    padding: ${full ? '0' : hasSide ? '0 1.45rem' : '0 5.1875rem'};
  `}
  ${({ theme, full, hasSide }) => theme.breakpoints.lessThan('medium')`
    padding:${full ? '0' : hasSide ? '0 1.25rem' : '0 3.1875rem'};
  `}
  ${({ theme, full, hasSide }) => theme.breakpoints.lessThan('small')`
    padding: ${full ? '0' : hasSide ? '0 1.15rem' : '0 1.2rem'};
  `}
`
