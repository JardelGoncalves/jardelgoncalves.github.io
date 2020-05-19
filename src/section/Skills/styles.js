import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 110px 80px;
  background-color: #222;

  h1.title {
    font-size: 50px;
    color: #fff;
    font-family: 'Gilroy ExtraBold';
    margin-bottom: 48px;
  }

  .row {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }


  .column:last-child {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .skill__item {
    margin: 8px 0;
  }

  @media only screen and (max-width: 900px) {
    padding-left: 40px;
    padding-right: 40px;
  }

  @media only screen and (max-width: 850px) {
    .row {
      flex-direction: column;
      width: 100%
    }
  }

  @media only screen and (max-width: 650px) {
    h1.title {
      font-size: 40px;
    }
  }

  @media only screen and (max-width: 600px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;


export const Col = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
