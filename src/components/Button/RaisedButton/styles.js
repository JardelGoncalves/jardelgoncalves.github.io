import styled from 'styled-components';

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

  :hover {
    opacity: 0.8;
  }
`;
