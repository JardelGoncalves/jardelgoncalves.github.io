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

  ${({ sideBySide, theme }) =>
    !sideBySide &&
    css`
      .article-card {
        &__title {
          font-size: ${theme.typography.sizes.lg};
          line-height: ${theme.typography.lineHeight.md};
        }
        &__details {
          padding: 0 0;
        }
        &__description {
          ${limitTextLine(3)};
        }
        &__read-to-time {
          display: none;
        }
      }
    `}

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
          max-width: 340px;
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
      height: 252px;

      img {
        width: 100%;
        height: 252px;
        object-fit: cover;
      }
    `
  }};

  transition: all 0.2s;
  img {
    border-top-left-radius: ${({ theme }) => theme.shapes.borderRadius.md};
    border-top-right-radius: ${({ theme }) => theme.shapes.borderRadius.md};
  }

  ${({ theme }) => theme.breakpoints.lessThan('medium')`
    height: 252px;

    img {
      height: 252px;
    }
  `}
`

export const Details = styled.div.attrs({
  className: 'article-card__details'
})`
  position: relative;
  flex: 1;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: ${({ theme }) => theme.spacing.sm} 0;

  ${({ theme }) => theme.breakpoints.lessThan('medium')`
      padding: 0 0;
  `}
`

export const Title = styled.a.attrs({
  className: 'article-card__title'
})`
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

  ${({ theme }) => theme.breakpoints.lessThan('medium')`
    font-size: ${theme.typography.sizes.lg};
    line-height: ${theme.typography.lineHeight.md};
  `}
`

export const Description = styled.p.attrs({
  className: 'article-card__description'
})`
  font-size: ${({ theme }) => theme.typography.sizes.base};
  font-weight: ${({ theme }) => theme.typography.weight.regular};
  line-height: ${({ theme }) => theme.typography.lineHeight.base};
  color: ${({ theme }) => theme.colors.descriptionColor};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  ${limitTextLine(5)};
`

export const TimeToRead = styled.span.attrs({
  className: 'article-card__read-to-time'
})`
  position: absolute;
  bottom: 0.75rem;
  font-size: ${({ theme }) => theme.typography.sizes.base};
  font-weight: ${({ theme }) => theme.typography.weight.bold};

  ${({ theme }) => theme.breakpoints.lessThan('medium')`
      display: none;
  `}
`
