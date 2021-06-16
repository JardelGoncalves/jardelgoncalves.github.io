import styled from 'styled-components'

export const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0 6.25rem;

  ${({ theme }) => theme.breakpoints.lessThan('huge')`
    padding: 0 4.1875rem;
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

export const Content = styled.section`
  display: flex;
  max-width: ${({ theme }) => theme.sizes.portView};
  width: 100%;
`
