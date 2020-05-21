import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 110px 0;
  padding-bottom: 190px;
  background-color: #222;
  position: relative;

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
  .card__project:first-child {
    margin-left: 80px;
  }

  .title,
  .card__project {
    transition: all 0.3s ease-in-out;
  }

  @media only screen and (max-width: 1100px) {
    .title {
      margin-left: 50px;
    }

    .card__project:first-child {
      margin-left: 40px;
    }
  }
  @media only screen and (max-width: 650px) {
    padding: 80px 0;

    .title {
      margin-left: 10px;
      font-size: 40px;
      margin-bottom: 40px;
    }

    .card__project:first-child {
      margin-left: 0;
    }
  }
`;

export const CardProject = styled.section`
  display: flex;
  height: 180px;
  min-width: 260px;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;

  button {
    width: 100%;
    height: 100%;
    background-color: #5C3BFE;
    border:${({ active }) => (active ? '5px solid #5C3BFE' : 'none')};
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    cursor: pointer;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-bottom-left-radius: 16px;
      border-bottom-right-radius: 16px;
    }

    .card__project__caption {
      display: none;
      font-size: 30px;
      font-family: 'Gilroy ExtraBold';
      color: #fff;
      background-color: #5C3BFE99;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      text-align: center;
      border-bottom-left-radius: 16px;
      border-bottom-right-radius: 16px;
    }

    &:hover {
      .card__project__caption {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }

  @media only screen and (max-width: 600px) {
    min-height: 120px;
    min-width: 240px;
    button {
      .card__project__caption {
        font-size: 18px;
      }
    }
  }
`;

export const Slide = styled.div`
  position: relative;
  width: 100%;
  display: flex;

  .project {
    opacity: 0;
    display: none;
  }

  .project {
    transition: all 0.3s ease-in-out;
  }

  .project.project--active {
    opacity: 1;
    display: flex;
  }
`;

export const Show = styled.div`
  background-color: #222;
  display: none;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  padding: 100px 80px;
  width: 100%;
  z-index: 1;

  h1 {
    font-family: 'Gilroy ExtraBold';
    font-size: 35px;
    color: #fff;
    margin-top: 24px;
  }
  p {
    font-family: 'Gilroy Light';
    font-size: 20px;
    line-height: 1.7;
    color: #ffffffea;
    margin-top: 20px;
  }

  div.project__image {
    position: absolute;
    top: 80px;
    right: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 1;

    img {
      position: absolute;
      right: -250px;
      top: -80px;
      width: 65%;
      height: auto;
      z-index: 1;

    }
  }

  div.project__content {
    width: 600px;
    z-index: 2;

    .project__tech {
      display: flex;
      flex-direction: column;
      margin-top: 20px;
      z-index: 10;

      h2 {
        font-size: 19px;
        margin-bottom: 8px;
        color: #fff;
        font-family: 'Gilroy ExtraBold';
      }

      .tech {
        display: flex;
        flex-wrap: wrap;
        margin-top: 6px;
      }
    }

    .project__links {
      display: flex;
      flex-wrap: wrap;
      margin-top: 30px;

      a {
        margin: 4px;
      }
    }
  }

  @media only screen and (max-width: 1000px) {

    div.project__image {
      opacity: 0.7;
      top: 120px;

      img {
        right: -280px;
        width: 75%;
      }
    }
  }

  @media only screen and (max-width: 900px) {

    .project__content {
      width: 400px;
    }

    div.project__image {
      opacity: 0.7;
      top: 180px;

      img {
        right: -380px;
        width: 95%;
      }
    }
  }

  @media only screen and (max-width: 800px) {
    padding-left: 40px;
    padding-right: 40px;

    .project__content {
      width: 400px;
    }

    div.project__image {
      opacity: 0.7;
      top: 180px;

      img {
        right: -380px;
        width: 110%;
      }
    }
  }

  @media only screen and (max-width: 650px) {
    padding-left: 20px;
    padding-right: 20px;

    h1 {
      font-size: 28px;
    }

    p {
      font-size: 16px;
    }

    .project__content {
      max-width: 100%;
    }

    div.project__image {
      opacity: 0.2;
      top: 110px;

      img {
        right: -420px;
        width: 120%;
      }
    }
  }

  @media only screen and (max-width: 500px) {

    div.project__image {
      opacity: 0.2;
      top: 110px;

      img {
        right: -420px;
        width: 140%;
      }
    }
  }

  @media only screen and (max-width: 520px) {
    div.project__image {
      opacity: 0.2;
      top: 150px;

      img {
        right: -320px;
        width: 180%;
      }
    }
  }
`;
