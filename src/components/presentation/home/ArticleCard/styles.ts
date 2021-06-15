import styled, { css } from 'styled-components'
import { limitTextLine } from 'utils/limit-text-line'

type ContainerProps = {
  sideBySide?: boolean | undefined
  width?: number | undefined
}

export const Container = styled.div<ContainerProps>`
  max-width: ${({ width }) => (width ? `${width}px` : '100%')};
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: ${({ sideBySide }) => (sideBySide ? 'row' : 'column')};
  gap: ${({ theme }) => theme.spacing.md};

  ${({ theme }) => theme.breakpoints.lessThan('medium')`
    flex-direction: column;
  `}
`
export const ImageCover = styled.div<ContainerProps>`
  ${({ sideBySide }) => {
    if (sideBySide)
      return css`
        max-width: 640px;
        width: 100%;
        height: 352px;

        img {
          width: 100%;
          height: 352px;
          object-fit: cover;
        }

        ${({ theme }) => theme.breakpoints.lessThan('large')`
          max-width: 380px;
        `}
        ${({ theme }) => theme.breakpoints.lessThan('medium')`
          max-width: 100%;
          height: 302px;
          img {
            height: 302px;
          }
        `}
      `

    return css`
      max-width: 100%;
      width: 100%;
      height: 302px;

      img {
        width: 100%;
        height: 302px;
        object-fit: cover;
      }
    `
  }};

  img {
    border-top-left-radius: ${({ theme }) => theme.shapes.borderRadius.md};
    border-top-right-radius: ${({ theme }) => theme.shapes.borderRadius.md};
  }
`

export const Details = styled.div`
  flex: 1;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: ${({ theme }) => theme.spacing.sm} 0;
`

export const Title = styled.a`
  font-size: ${({ theme }) => theme.typography.sizes.xl};
  font-weight: ${({ theme }) => theme.typography.weight.medium};
  line-height: ${({ theme }) => theme.typography.lineHeight.lg};
  margin-bottom: 10px;
  cursor: pointer;
  transition: all 0.1s;
  &:hover {
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.primary700};
  }
`

export const Description = styled.p`
  flex: auto;
  font-size: ${({ theme }) => theme.typography.sizes.base};
  font-weight: ${({ theme }) => theme.typography.weight.regular};
  line-height: ${({ theme }) => theme.typography.lineHeight.base};
  color: ${({ theme }) => theme.colors.descriptionColor};
  ${limitTextLine(7)};
`

export const TimeToRead = styled.span`
  font-size: ${({ theme }) => theme.typography.sizes.base};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
`
