import styled, { keyframes } from 'styled-components';

interface IProgressBar {
  percentage?: number | 10;
  label?: string;
  color?: string ;
  bg?: string ;
  theme?: any;
}

export const Wrapper = styled.div<IProgressBar>`
  display: flex;
  flex-direction: column;
  width: 100%;
  span.label {
    font-size: 18px;
    color: ${({ theme, color }) => color || theme.colors.primary};
    margin-bottom: 8px;
  }
`;

const moveAnimation = keyframes`
  0% { width: 0; }
  100% { width: 100%; }
`;

export const Bar = styled.div<IProgressBar>`
  width: 420px;
  height: 20px;
  background-color: #2C2C2C;
  border-radius: 10px;
  position: relative;
  div {
    height: 20px;
    background-color: ${({ theme, bg }) => bg || theme.colors.primary};
    border-radius: 10px;
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    max-width: ${({ percentage }) => `${percentage}%`}; 
    animation: ${moveAnimation} 1s ease-in-out;
    animation-fill-mode:both;
    span {
      color: #fff;
      font-size: 12px;
      margin-right: 8px;
    }
  }
  @media only screen and (max-width: 500px) {
    width: 100%;
  }
`;
