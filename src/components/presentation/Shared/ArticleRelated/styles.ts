import styled from 'styled-components'
import { limitTextLine } from 'utils/limit-text-line'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  max-width: 55rem;
  width: 100%;
`

export const AnchorLik = styled.a`
  font-size: ${({ theme }) => theme.typography.sizes.lg};
  font-weight: ${({ theme }) => theme.typography.weight.medium};
  line-height: ${({ theme }) => theme.typography.lineHeight.md};
  cursor: pointer;
  transition: all 0.1s;
  &:hover {
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.primary};
  }
`

export const Description = styled.p`
  font-size: ${({ theme }) => theme.typography.sizes.base};
  font-weight: ${({ theme }) => theme.typography.weight.regular};
  line-height: ${({ theme }) => theme.typography.lineHeight.base};
  color: ${({ theme }) => theme.colors.description};
  margin-top: ${({ theme }) => theme.spacing['2xs']};
  ${limitTextLine(1)};
`
