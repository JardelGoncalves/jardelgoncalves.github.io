import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #191919;
  position: relative;
  height: 1100px;

  @media only screen and (max-width: 1000px) {
    height: 1010px;
  }

  @media only screen and (max-width: 900px) {
    height: 1100px;
  }


  @media only screen and (max-width: 600px) {
    height: 1200px;
  }
`;
