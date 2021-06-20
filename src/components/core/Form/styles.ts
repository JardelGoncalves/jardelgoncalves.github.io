import styled from 'styled-components'

type WrapperProps = {
  width: number | undefined
}

export const WrapperForm = styled.form<WrapperProps>`
  max-width: ${({ width }) => (width ? `${width}px` : '100%')};
  width: 100%;

  .input + .input {
    margin-top: 1.5rem;
  }
  .raised-button {
    margin-top: 2rem;
  }
`
