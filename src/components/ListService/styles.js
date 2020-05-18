import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 110px 0;
  background-color: #191919;

  .title {
    font-family: 'Gilroy ExtraBold';
    font-size: 50px;
    color: #fff;
    margin-bottom: 48px;
  }

  .container {
    display: flex;
    flex-direction: row;
  };

  .title {
    margin-left: 100px;
  }
  .card:first-child {
    margin-left: 80px;
  }

  .title,
  .card {
    transition: all 0.3s ease-in-out;
  }

  @media only screen and (max-width: 1100px) {
    .title {
      margin-left: 50px;
    }

    .card:first-child {
      margin-left: 40px;
    }
  }
  @media only screen and (max-width: 650px) {
    padding: 80px 0;

    .title {
      margin-left: 10px;
      margin-bottom: 40px;
    }

    .card:first-child {
      margin-left: 0;
    }
  }
`;

export const CardService = styled.section`
  display: flex;
  height: 440px;
  min-width: 740px;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;

  div {
    width: 100%;
    height: 100%;
    background-color: #5C3BFE;
    border-radius: 16px;
    padding: 32px;
    display: flex;
    flex-direction: column;

    svg {
      font-size: 90px;
      color: #fff;
    }

    h1 {
      font-family: 'Gilroy ExtraBold';
      font-size: 28px;
      color: #fff;
      margin-top: 24px;
    }
    p {
      font-family: 'Gilroy Light';
      font-size: 22px;
      line-height: 1.7;
      color: #ffffffea;
      margin-top: 20px;
    }
  }

  @media only screen and (max-width: 900px) {
    min-width: 640px;

    div {
      svg {
        font-size: 75px;
      }

      h1 {
        font-size: 26px;
      }

      p {
        font-size: 18px;
      }
    }
  }

  @media only screen and (max-width: 800px) {
    min-width: 540px;

    div {
      svg {
        font-size: 65px;
      }

      h1 {
        font-size: 24px;
      }

      p {
        font-size: 18px;
      }
    }
  }

  @media only screen and (max-width: 650px) {
    min-width: 440px;

    div {
      svg {
        font-size: 65px;
      }

      h1 {
        font-size: 24px;
      }

      p {
        font-size: 18px;
      }
    }
  }

  @media only screen and (max-width: 550px) {
    min-width: 300px;
    height: 500px;
    padding: 0 10px;

    div {
      border-radius: 12px;
      svg {
        font-size: 50px;
      }

      h1 {
        font-size: 22px;
        margin-top: 15px;
      }

      p {
        font-size: 16px;
        margin-top: 15px;
      }
    }
  }

`;
