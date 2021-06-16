import { rgba, lighten } from 'polished'
import styled from 'styled-components'

type TagsProps = {
  background?: string | undefined
}

export const Wrapper = styled.a<TagsProps>`
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  background-color: ${({ theme, background }) =>
    rgba(background || theme.colors.primary700, 0.15)};
  color: ${({ theme, background }) => background || theme.colors.primary700};
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  font-weight: ${({ theme }) => theme.typography.weight.semiBold};
  line-height: ${({ theme }) => theme.typography.lineHeight.sm};
  border-radius: ${({ theme }) => theme.shapes.borderRadius.md};
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    background-color: ${({ theme, background }) =>
      background || theme.colors.primary700};
    color: ${({ theme, background }) =>
      lighten(0.9, background || theme.colors.primary700)};
  }
`
