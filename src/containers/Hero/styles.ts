import styled, { keyframes } from 'styled-components'
// import { BREAKPOINT_SM } from '../../styles/tokens/breakpoints'

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;
`

const GradientAnimation = keyframes`
  from {
    background-position-x: 0%;
  };
  to {
    background-position-x: 400vw;
  }
`

export const Title = styled.h1`
  margin-top: 12rem;
  background: repeating-linear-gradient(
    -45deg,
    var(--primary-color) 0%,
    var(--primary-color) 7.14%,
    var(--gradient-to) 14.28%,
    var(--gradient-to) 21.42%,
    var(--gradient-to) 28.56%,
    var(--gradient-from) 35.7%,
    var(--gradient-from) 42.84%,
    var(--primary-color) 50%
  );
  background-size: 200% auto;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 400vw 400vw;
  animation: ${GradientAnimation} 50s infinite linear forwards;
  -webkit-animation: ${GradientAnimation} 50s infinite linear forwards;
  font-size: 5.1vw;
  font-weight: 900;
` /* @media only screen and (max-width: ${BREAKPOINT_SM}) {
    font-size: 9vw;
  } */
export const Description = styled.p`
  font-size: 16px;
  font-weight: 300;
  text-align: center;
  line-height: 1.8em;
  color: var(--text-color);
  max-width: 750px;
  width: 100%;
  padding: 12px 0;

  strong {
    font-weight: 900;

    &:last-child {
      position: relative;
      padding: 0 12px;
      margin-left: 4px;
      &::before {
        content: '';
        position: absolute;
        top: -2.5px;
        left: 0;
        width: 100%;
        height: 26px;
        background: linear-gradient(90deg, #9796f0 0%, #fbc7d4 100%);
        opacity: 0.7;
        border-radius: 20px;
        z-index: -1;
      }
    }
  }
`

export const SocialList = styled.div`
  display: flex;
  align-items: center;
  margin-top: 24px;

  a + a {
    margin-left: 12px;
  }
`
