import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 1.25rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 6rem 0;
  align-items: center;
`

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.typography.sizes.xl};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  margin-bottom: 1.8rem;

  ${({ theme }) => theme.breakpoints.lessThan('medium')`
    font-size: ${theme.typography.sizes.lg};
  `}
`

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
