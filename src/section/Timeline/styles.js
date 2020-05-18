import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 110px 80px;

  h1.title {
    font-size: 50px;
    color: #fff;
    font-family: 'Gilroy ExtraBold';
    margin-bottom: 48px;
  }

  @media only screen and (max-width: 900px) {
    padding-left: 40px;
    padding-right: 40px;
  }

  @media only screen and (max-width: 600px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;
