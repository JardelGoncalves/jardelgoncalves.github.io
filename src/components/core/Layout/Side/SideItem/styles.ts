import styled, { css } from 'styled-components'
import { rgba } from 'polished'

type WrapperProps = {
  minus?: boolean
  noHover?: boolean
}

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;

  color: ${({ theme }) => theme.colors.text};
  border-radius: 16px;
  padding: 0 1rem;
  transition: 0.2s;

  ${({ noHover, theme }) =>
    noHover
      ? css`
          cursor: default;
        `
      : css`
          cursor: pointer;

          &:hover {
            background-color: ${rgba(theme.colors.text, 0.03)};
          }
        `}
  & + & {
    margin-top: 16px;
  }

  .--minus {
    width: ${({ minus }) => (minus ? '100%' : 'auto')};
    display: flex;
    align-items: center;
    justify-content: ${({ minus }) => (minus ? 'center' : 'flex-start')};
  }

  .--text {
    width: 100%;
    display: ${({ minus }) => (minus ? 'none' : 'flex')};
    align-items: center;
  }
`
