import styled from 'styled-components'
import { motion } from 'framer-motion'

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
