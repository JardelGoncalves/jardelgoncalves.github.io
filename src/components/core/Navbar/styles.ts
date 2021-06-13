import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'

type ContainerProp = {
  withBackdrop: boolean
}

export const Container = styled(motion.nav)<ContainerProp>`
  position: fixed;
  height: ${({ theme }) => theme.sizes.navbar};
  width: 100%;
  ${({ withBackdrop }) =>
    withBackdrop &&
    css`
      backdrop-filter: blur(15px);
    `};
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
  transition: border 0.4s;
  transition: padding 0.2s;
  z-index: 9999;
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
    height: 3.2rem;
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
  color: ${({ theme }) => theme.colors.menuTextColor};
  font-weight: ${({ theme }) => theme.typography.weight.medium};
  padding: 0.5rem 1.5rem;
  position: relative;

  a {
    &::after {
      content: '';
      background-color: ${({ theme }) => theme.colors.primary900};
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
      color: ${({ theme }) => theme.colors.primary900};
    }

    &:hover::after {
      width: 35%;
    }
  }
`
