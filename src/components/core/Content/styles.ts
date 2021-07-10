import styled from 'styled-components'

type ContentProps = {
  full?: boolean | undefined
  hasSide?: boolean | undefined
}

export const Wrapper = styled.main`
  grid-area: content;
  display: flex;
  justify-content: center;
  width: 100%;
`

export const Content = styled.section<ContentProps>`
  display: flex;
  max-width: ${({ theme, full, hasSide }) =>
    full || hasSide ? '100%' : theme.sizes.portView};
  width: 100%;
  padding: ${({ full, hasSide }) => (full ? 0 : hasSide ? '0 2rem' : '0 5rem')};

  ${({ theme, full, hasSide }) => theme.breakpoints.lessThan('huge')`
    padding: ${full ? '0' : hasSide ? '0 1.675rem' : '0 4.1875rem'};
  `}
  ${({ theme, full, hasSide }) => theme.breakpoints.lessThan('large')`
    padding: ${full ? '0' : hasSide ? '0 1.45rem' : '0 3.1875rem'};
  `}
  ${({ theme, full, hasSide }) => theme.breakpoints.lessThan('medium')`
    padding:${full ? '0' : hasSide ? '0 1.25rem' : '0 2.1875rem'};
  `}
  ${({ theme, full, hasSide }) => theme.breakpoints.lessThan('small')`
    padding: ${full ? '0' : hasSide ? '0 1.15rem' : '0 1.2rem'};
  `}
`
