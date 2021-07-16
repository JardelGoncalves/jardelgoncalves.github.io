import styled from 'styled-components'

export const Wrapper = styled.nav`
  grid-area: side;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 16px;
`

export const ItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  svg {
    fill: ${({ theme }) => theme.colors.text};
  }
`

export const LogoutButton = styled.button`
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.text};
  width: 100%;
  svg {
    fill: ${({ theme }) => theme.colors.text};
  }
`
