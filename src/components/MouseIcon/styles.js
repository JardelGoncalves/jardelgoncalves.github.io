import styled, { keyframes } from 'styled-components';

export const MouseContainer = styled.svg`
  max-width: 2.5rem;
  width: 100%;
  height: auto;
`;

export const ScrollLink = styled.a`
  text-transform: none;
  position: absolute;
  bottom: 6rem;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;

  @media only screen and (max-width: 700px) {
    display: none;
    opacity: 0;
  }
`;

const ScrollAnimation = keyframes`
  0%,
  20% {
    transform: translateY(0) scaleY(1);
  }
  10% {
    opacity: 1;
  }
  100% {
    transform: translateY(36px) scaleY(2);
    opacity: 0.01;
  }
`;

export const Mouse = styled.rect`
  stroke: #5C3BFE;
  stroke-width: 3px;
`;

export const Scroll = styled.circle`
  animation-name: ${ScrollAnimation};
  animation-duration: 1.5s;
  animation-timing-function: cubic-bezier(0.65, -0.55, 0.25, 1.5);
  animation-iteration-count: infinite;
  transform-origin: 50% 20.5px;
  will-change: transform;
  fill: #5C3BFE;
`;
