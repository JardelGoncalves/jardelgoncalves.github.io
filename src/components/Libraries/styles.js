import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 120px 0;
  position: relative;
  background-color: #222;

  .container {
    display: flex;
    flex-direction: row;
  };

  .title {
    font-family: 'Gilroy ExtraBold';
    font-size: 50px;
    color: #fff;
    margin-bottom: 48px;
    margin-left: 80px;
  }

  .card__library:first-child {
    margin-left: 80px;
  }

  .card__library,
  .title {
    transition: all 0.3s ease-in-out;
  }

  @media only screen and (max-width: 1100px) {
    .card__library:first-child {
      margin-left: 40px;
    }
   .title {
      margin-left: 40px;
    }
  }
  @media only screen and (max-width: 650px) {
    padding: 100px 0;
    .card__library:first-child {
      margin-left: 20px;
      font-size: 40px;
    }

    .title {
      margin-left: 20px;
    }
  }
`;


export const Card = styled.div`
  min-width: 300px;
  height: 310px;
  display: flex;
  justify-content: flex-start;

  .card__library__content,
  .card__library__buttons a {
    transition: all 0.3s ease-in-out;
  }

  .card__library__content {
    background-color: #333;
    height: 100%;
    width: 270px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 8px;

    img {
      width: 130px;
      height: auto;
    }

    h2 {
      font-family: 'Gilroy ExtraBold';
      color: #fff;
      font-size: 22px;
      margin-bottom: 12px;
    }
    p {
      padding: 0 10px;
      color: #fff;
      font-family: 'Gilroy Light';
      line-height: 1.5;
      text-align: center;
      font-size: 13px;
    }
    .card__library__buttons {
      display: flex;
      margin-top: 16px;

      a {
        height: 32px;
        padding: 10px 20px;
        margin: 0 2px;
      }
    }

    &:hover {
      background-color: #5C3BFE;
      .card__library__buttons a {
        background-color: #fff;
        color: #5C3BFE;
      }
    }
  }
`;
