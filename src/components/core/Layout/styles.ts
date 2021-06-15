import styled from 'styled-components'

export const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  width: 100%;
`

export const Content = styled.section`
  padding: 0 6.25rem;
  display: flex;
  justify-content: center;
  max-width: ${({ theme }) => theme.sizes.portView};
  width: 100%;

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
