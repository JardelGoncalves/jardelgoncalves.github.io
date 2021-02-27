import styled, { keyframes } from 'styled-components'

export const Wrapper = styled.header`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;
`

const GradientAnimation = keyframes`
  0% {
    background-position: 0% 0%;
  }
  30% {
    background-position: 0% 0%;
  }
  50% {
    background-position: 50% 0%;
  }
  70% {
    background-position: 0% 0%;
  }
  100% {
    background-position: 0% 0%;
  }
`

export const Title = styled.h1`
  background: linear-gradient(
    to right,
    var(--gradient-from) 0%,
    var(--gradient-to) 35%
  );
  background-size: 150% auto;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${GradientAnimation} 10s ease-in-out infinite;
  font-size: 5.5vw;
  font-weight: 900;

  @media only screen and (max-width: 700px) {
    font-size: 9vw;
  }
`

export const Description = styled.p`
  font-size: 18px;
  font-weight: 300;
  text-align: center;
  color: var(--text-color);
  max-width: 750px;
  width: 100%;
  padding: 12px 0;
`
