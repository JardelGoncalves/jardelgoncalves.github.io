import styled from "styled-components";

export const Container = styled.div`
  svg {
    width: ${({ size }) => `${size || 32}px`};
    height: ${({ size }) => `${size || 32}px`};
    font-size: ${({ size }) => `${size || 32}px`};
  }
`