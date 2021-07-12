import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.description};
  font-size: ${({ theme }) => theme.typography.sizes.xl};
  font-weight: ${({ theme }) => theme.typography.weight.black};
  text-align: center;
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
