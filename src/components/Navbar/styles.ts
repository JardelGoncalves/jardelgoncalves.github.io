import styled from 'styled-components'
import { motion } from 'framer-motion'
import { BREAKPOINT_SM } from '../../theme/breakpoints'

export const Wrapper = styled(motion.nav)`
  height: 70px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 90px;
  position: fixed;
  border-bottom: 1px solid var(--border-color);
  backdrop-filter: blur(20px);
  transition: border 0.4s;
  transition: padding 0.2s;
  z-index: 4;

  .menu {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
    align-items: center;

    &__item {
      color: var(--menu-color);
      font-weight: 700;
      padding: 8px 24px;
      position: relative;

      a {
        &::after {
          content: '';
          background-color: var(--primary-color);
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          margin: 0 auto;
          height: 4px;
          border-radius: 2px;
          width: 0%;
          transition: 0.2s;
        }
        &:hover,
        &::after {
          color: var(--primary-color);
        }

        &:hover::after {
          width: 35%;
        }
      }
    }
  }

  @media only screen and (max-width: ${BREAKPOINT_SM}) {
    transition: padding 0.2s;
    padding: 0 32px;
  }
`
