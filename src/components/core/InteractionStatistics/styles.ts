import styled, { css, keyframes } from 'styled-components'
const flexColumn = css`
  display: flex;
  flex-direction: column;
`

const emojiAnimation = keyframes`
  0% {
    transform: rotate(35deg);
  }
  50% {
    transform: rotate(-35deg);
  }
  100% {
    transform: rotate(35deg);
  }
`

const addInteractionAnimation = keyframes`
  0% {
    top: -8px;
    opacity: 0;
  }
  80% {
    top: -24px;
    opacity: 0.7;
  }
  100% {
    top: -24px;
    opacity: 1
  }
`

export const Wrapper = styled.div`
  position: fixed;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  ${flexColumn};
  padding: 0 1rem;
  user-select: none;
`
export const Item = styled.button`
  width: 3rem;
  ${flexColumn};
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  transition: all 0.2s;

  img {
    width: 1.625rem;
    height: 1.625rem;
  }

  span {
    margin-top: 0.25rem;
    font-size: ${({ theme }) => theme.typography.sizes.xs};
    line-height: ${({ theme }) => theme.typography.lineHeight.xs};
    color: ${({ theme }) => theme.colors.grayscale400};
  }

  & + & {
    margin-top: 1.5rem;
  }

  &:hover {
    img {
      animation: ${emojiAnimation} 0.7s linear infinite;
    }
  }
  &.--add-one {
    position: relative;
    &::after {
      content: '+1';
      position: absolute;
      top: -8px;
      opacity: 0;
      left: 0;
      right: 0;
      margin: 0 auto;
      width: 16px;
      height: 16px;
      border-radius: 8px;
      background-color: green;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 10px;
      font-weight: 700;
      animation: ${addInteractionAnimation} 0.3s linear;
    }
  }
`
