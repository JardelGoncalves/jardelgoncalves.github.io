import styled from 'styled-components'

type LayoutProps = {
  full?: boolean | undefined
}

export const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  width: 100%;
`

export const Content = styled.section<LayoutProps>`
  padding: ${({ full }) => (full ? 0 : '5rem')} 0;
  display: flex;
  max-width: ${({ theme, full }) => (full ? '100%' : theme.sizes.portView)};
  width: 100%;

  ${({ theme, full }) => theme.breakpoints.lessThan('huge')`
    padding: ${full ? '0' : '0 4.1875rem'};
  `}
  ${({ theme, full }) => theme.breakpoints.lessThan('large')`
    padding: ${full ? '0' : '0 3.1875rem'};
  `}
  ${({ theme, full }) => theme.breakpoints.lessThan('medium')`
    padding:${full ? '0' : '0 2.1875rem'};
  `}
  ${({ theme, full }) => theme.breakpoints.lessThan('small')`
    padding: ${full ? '0' : '0 1.2rem'};
  `}
`
