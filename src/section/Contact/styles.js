import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 110px 80px;
  justify-content: space-between;
  background-color: #5C3BFE;

  form {
    display: flex;
    flex-direction: column;
    .input-data {
      margin: 10px 0;
    }
  }

  .title {
    font-size: 50px;
    font-family: 'Gilroy ExtraBold';
    text-transform: uppercase;
    line-height: 1.4;
    color: #fff;
  }

  .container__button {
    text-align: right;
    margin-top: 10px;
  }

  .other {
    display: flex;
    align-items: flex-end;

    .other__contacts {
      display: flex;
      flex-direction: column;
    }
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;

    li {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin: 0;
      padding: 0;

      svg {
        margin-right: 10px;
        font-size: 30px;
      }

      a {
        padding: 0;
        font-size: 22px;
        font-family: 'Gilroy Light';
      }

    }
  }
  @media only screen and (max-width: 1050px) {
    h1.title {
      font-size: 32px;
    }

    a {
        font-size: 19px;
    }
  }

  @media only screen and (max-width: 900px) {
    padding-left: 40px;
    padding-right: 40px;
  }

  @media only screen and (max-width: 850px) {
    flex-direction: column;
    .other {
      margin-top: 80px;
      align-items: flex-start;
    }
  }

  @media only screen and (max-width: 600px) {
    padding-left: 20px;
    padding-right: 20px;

    ul {
      li {
        a {
          font-size: 17px;
        }
      }
    }
  }

  @media only screen and (max-width: 360px) {
    padding-left: 20px;
    padding-right: 20px;

    ul {
      li {
        a {
          font-size: 14px;
        }
      }
    }
  }
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
