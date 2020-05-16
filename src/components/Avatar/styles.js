import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 300px;
  width: 210px;
  background-color: #222;
  border-radius: 16px;
  position: relative;

  img {
    height: 300px;
    width: 210px;
    object-fit: cover;
    position: absolute;
    border-radius: 16px;
    position: absolute;
    bottom: 16px;
    left: 16px;
  }

  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #5C3BFE;
  }
`;
