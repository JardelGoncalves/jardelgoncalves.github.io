import styled from 'styled-components';

export const Wrapper = styled.a`
  text-decoration: none;
  border-radius: 16px;
  padding: 0 50px;
  height: 48px;
  border: none;
  background-color: ${({ bg }) => (bg ? bg : '#5C3BFE')};
  color: ${({ color }) => (color ? color : '#ffffff')};
  cursor: pointer;
  font-size: 17px;
  font-family: 'Gilroy ExtraBold';
  display: flex;
  flex-direction: row;
  align-items: center;

  :hover {
    opacity: 0.8;
  }
`;
