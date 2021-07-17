import styled, { css, keyframes } from 'styled-components'
import { motion } from 'framer-motion'
import { rgba } from 'polished'
import Image from 'next/image'

const emojiAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  },
  33% {
    transform: rotate(-90deg);
  }
  66% {
    transform: rotate(80deg);
  }
  100% {
    transform: rotate(0deg);
  }
`

export const Container = styled(motion.nav)`
  width: 100%;
  display: flex;
  align-items: center;
`

export const NavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  img {
    width: auto;
    height: 3rem;
  }
`

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
`

export const NavMenuItem = styled.li`
  color: ${({ theme }) => theme.colors.textMenu};
  font-weight: ${({ theme }) => theme.typography.weight.semiBold};
  padding: 0.5rem 1.5rem;
  position: relative;

  a {
    font-size: ${({ theme }) => theme.typography.sizes.sm};
    &::after {
      content: '';
      background-color: ${({ theme }) => theme.colors.primary};
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      margin: 0 auto;
      height: 0.25rem;
      border-radius: 0.125rem;
      width: 0%;
      transition: 0.2s;
    }
    &:hover,
    &::after {
      color: ${({ theme }) => theme.colors.primary};
    }

    &:hover::after {
      width: 35%;
    }
  }
`

type MinusProps = {
  minus?: boolean
}

export const ToggleMinus = styled.button<MinusProps>`
  border: none;
  background-color: ${({ theme }) => rgba(theme.colors.text, 0.1)};
  height: 32px;
  width: 32px;
  border-radius: 16px;
  font-size: 0;
  transition: 0.2s;

  ${({ minus }) =>
    !minus &&
    css`
      transform: rotate(180deg);
    `}

  svg {
    width: 16px;
    height: 16px;

    path {
      stroke: ${({ theme }) => theme.colors.text};
    }
  }

  &:hover {
    filter: brightness(0.7);
  }
`

export const OptionsNavRight = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  gap: 1rem;
`

export const UserWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.875rem;

  &:hover {
    .emoji-hi-there {
      animation: ${emojiAnimation} 0.7s linear infinite;
    }
  }
`

export const AvatarWrapper = styled.div`
  height: 36px;
  width: 36px;
  display: flex;
  border-radius: 40px;
`

export const Avatar = styled(Image)`
  width: 36px;
  height: 36px;
  border-radius: 40px;
`

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const UserName = styled.span`
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  font-weight: ${({ theme }) => theme.typography.weight.semiBold};
`

export const Today = styled.span`
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  color: ${({ theme }) => rgba(theme.colors.text, 0.5)};
`

export const Emoji = styled.div.attrs((props) => ({
  className: 'emoji-hi-there',
  ...props
}))`
  display: inline-block;
`
