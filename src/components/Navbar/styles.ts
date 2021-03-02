import styled, { keyframes } from 'styled-components'

const fixedNavbar = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const Wrapper = styled.nav`
  height: 70px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 90px;
  position: relative;
  border-bottom: 1px solid var(--border-color);
  transition: border 0.4s;
  z-index: 4;

  &.navbar--fixed {
    animation: ${fixedNavbar} 0.5s;
    position: fixed;
    top: 0;
    left: 0;
    backdrop-filter: saturate(180%) blur(20px);
  }

  @media only screen and (max-width: 720px) {
    padding: 0 32px;
  }
`
