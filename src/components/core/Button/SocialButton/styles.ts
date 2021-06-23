import styled from 'styled-components'

export const Wrapper = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.shapes.borderRadius.xlg};
  transition: all 0.3s;
  cursor: pointer;
  font-size: 0;
  z-index: 1;
  svg {
    fill: ${({ theme }) => theme.colors.text};
  }

  &:hover {
    transition: all 0.3s;
    border-color: ${({ theme }) => theme.colors.primary};

    svg {
      fill: ${({ theme }) => theme.colors.primary};
    }
  }
`
