import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;


export const Wrapper = styled.button`
  border-radius: 16px;
  padding: 0 50px;
  height: 48px;
  border: none;
  background-color: ${({ bg }) => (bg ? bg : '#ffffff')};
  color: ${({ color }) => (color ? color : '#5C3BFE')};
  cursor: pointer;
  font-size: 17px;
  font-family: 'Gilroy ExtraBold';
  display: flex;
  align-items: center;

  svg {
    margin-left: 12px;
    animation: ${spin} 1s linear infinite;
  }

  :disabled {
    opacity: 0.7;
  }

  :hover {
    opacity: 0.7;
  }
`;
