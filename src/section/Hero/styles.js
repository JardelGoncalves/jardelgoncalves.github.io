import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 110px 80px;
  padding-top: 220px;

  svg {
    position: absolute;
    right: 0;
    top: 0;
    width: 800px;
    height: auto;
  }

  svg {
    transition: all 0.3s ease-in-out;
  }

  h1,
  h2,
  span,
  p {
    color: #fff;
    font-family: 'Gilroy Light';
  }

  h1 {
    font-size: 80px;
    font-family: 'Gilroy ExtraBold';
  }

  h2 {
    font-size: 60px;
  }

  p {
    width: 700px;
    line-height: 1.7;
    font-size: 18px;
  }

  span {
    font-size: 15px;
    color: #5C3BFE;
    margin: 30px 0;
  }

  a {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    max-width: 240px;

    svg {
      font-size: 16px;
    }
  }

  @media only screen and (max-width: 600px) {
    svg {
      width: 600px;
      height: auto;
    }
  }

  @media only screen and (max-width: 1000px) {
    p {
      width: 600px;
      font-size: 20px;
    }

    h1 {
      font-size: 70px;
    }

    h2 {
      font-size: 50px;
    }
  }

  @media only screen and (max-width: 900px) {
    padding-left: 40px;
    padding-right: 40px;

    p {
      width: 400px;
      font-size: 18px;
    }
    span {
      width: 400px;
    }

    h1 {
      font-size: 50px;
    }

    h2 {
      font-size: 30px;
    }
  }

  @media only screen and (max-width: 700px) {
    flex-direction: column-reverse;

    div.hero__text {
      margin-top: 16px;
      align-items: center;

      span,
      p {
        text-align: center;
        width: 100%;
      }

    }
  }

  @media only screen and (max-width: 600px) {
    flex-direction: column-reverse;
    padding-left: 20px;
    padding-right: 20px;

    div.hero__text {
      width: 100%;
      margin-top: 16px;
      align-items: flex-start;

      span,
      p {
        text-align: left;
        width: 100%;
      }

      h1 {
        font-size: 36px;
      }

      h2 {
        font-size: 24px;
      }
    }
  }
`;


export const Col = styled.div`
  display: flex;
  flex-direction: column;
`;
