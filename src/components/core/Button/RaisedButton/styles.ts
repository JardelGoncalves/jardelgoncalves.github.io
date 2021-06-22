import styled, { css } from 'styled-components'

type WrapperProps = {
  block?: boolean | undefined
  bg?: string | undefined
  width?: number | undefined
}

export const Wrapper = styled.button.attrs((props) => ({
  className: 'raised-button',
  ...props
}))<WrapperProps>`
  ${({ block }) =>
    block &&
    css`
      width: 100%;
    `};
  ${({ width }) =>
    width
      ? css`
          max-width: ${width}px;
          width: 100%;
        `
      : css`
          padding: 0 2rem;
        `}
  height: 3rem;

  background-color: ${({ theme, bg }) => theme.colors[bg || 'primary900']};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.typography.sizes.base};
  font-weight: ${({ theme }) => theme.typography.weight.semiBold};
  border-radius: ${({ theme }) => theme.shapes.borderRadius.sm};
  border: none;
  transition: all 0.2s;

  &:disabled {
    opacity: 0.4;
    cursor: default;
  }
  &:hover {
    ${({ disabled }) =>
      !disabled &&
      css`
        opacity: 0.8;
      `};
  }
`
