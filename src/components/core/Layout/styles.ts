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
  max-width: ${({ theme }) => theme.sizes.desktop.portView};
  width: 100%;
`
