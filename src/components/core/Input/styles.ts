import { rgba } from 'polished'
import styled from 'styled-components'

type WrapperProps = {
  width?: number | undefined
}

export const Wrapper = styled.div.attrs((props) => ({
  className: 'input',
  ...props
}))<WrapperProps>`
  display: flex;
  flex-direction: column;
  max-width: ${({ width }) => (width ? `${width}px` : '100%')};
  width: 100%;
`
export const Label = styled.span`
  margin-bottom: 0.25rem;
  color: ${({ theme }) => theme.colors.description};
  font-size: ${({ theme }) => theme.typography.sizes.base};
  font-weight: ${({ theme }) => theme.typography.weight.medium};
  line-height: ${({ theme }) => theme.typography.lineHeight.base};
`

export const Input = styled.input`
  flex: 1;
  height: 3rem;
  padding: 0.875rem 1rem;
  border: 2px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.typography.sizes.base};
  font-weight: ${({ theme }) => theme.typography.weight.medium};
  border-radius: ${({ theme }) => theme.shapes.borderRadius.sm};
  background-color: transparent;
  transition: all 0.2s;

  &:focus {
    border: 2px solid ${({ theme }) => rgba(theme.colors.primary, 0.6)};
  }
  &::placeholder {
    color: ${({ theme }) => theme.colors.placeholder};
    font-size: ${({ theme }) => theme.typography.sizes.sm};
    font-weight: ${({ theme }) => theme.typography.weight.light};
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
    -webkit-text-fill-color: ${({ theme }) => theme.colors.text} !important;
  }
`
export const MessageError = styled.p`
  color: ${({ theme }) => theme.colors.negative};
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  padding-top: ${({ theme }) => theme.spacing['2xs']};
`
