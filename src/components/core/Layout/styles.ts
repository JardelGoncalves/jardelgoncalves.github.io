import styled from 'styled-components'

type LayoutProps = {
  full?: boolean | undefined
}

export const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  width: 100%;

  ${({ theme }) => theme.breakpoints.lessThan('huge')`
    padding: 0 5.1875rem;
  `}
  ${({ theme }) => theme.breakpoints.lessThan('large')`
    padding: 0 3.1875rem;
  `}
  ${({ theme }) => theme.breakpoints.lessThan('medium')`
    padding: 0 2.1875rem;
  `}
  ${({ theme }) => theme.breakpoints.lessThan('small')`
    padding: 0 1.2rem;
  `}
`

export const Content = styled.section<LayoutProps>`
  padding: ${({ full }) => (full ? 0 : '5rem')} 0;
  display: flex;
  max-width: ${({ theme }) => theme.sizes.portView};
  width: 100%;
`
