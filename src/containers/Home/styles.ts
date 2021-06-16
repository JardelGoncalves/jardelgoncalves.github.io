import styled from 'styled-components'

export const Container = styled.main`
  position: relative;
  width: 100%;
  padding: 0 2.5rem;

  ${({ theme }) => theme.breakpoints.lessThan('medium')`
      padding: 0 0;
  `}
`
