import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 110px 0;
  padding-bottom: 190px;
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
    border:${({ active }) => (active ? '3px solid #5C3BFE' : 'none')};
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
  background-color: tomato;
  display: flex;
`;

export const Show = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  padding-bottom: 40px;
  width: 100%;


  .project {
    flex-direction: column;
    justify-content: center;
    padding: 80px 80px;
    padding-bottom: 40px;
    display: flex;
    opacity: 0;
  }

  .project {
    transition: all 0.3s ease-in-out;
  }

  .project.project--active {
    opacity: 1;
    transition: all 0.3s ease-in-out;
  }

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

  div.project__tech {
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

    div.project__links,
    div.tech {
      display: flex;
      flex-wrap: wrap;
      margin-top: 6px;
    }

    div.project__links {
      margin-top: 60px;

      a {
        margin: 2px;
      }
    }
  }

  .project__tech,
  p {
    width: 600px;

  }


  div.project__image {
    position: absolute;
    top: 80px;
    right: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;

    img {
      position: absolute;
      right: -250px;
      top: -80px;
      width: 65%;
      height: auto;
    }
  }

  div.project__image {
    transition: all 0.3s ease-in-out;
  }

  @media only screen and (max-width: 1000px) {
    padding-bottom: 0px;
    .project {
      padding-bottom: 20px;
    }

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
    padding-bottom: 0px;
    .project {
      padding-bottom: 0px;
    }

    .project__tech,
    p {
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
    padding-bottom: 0px;
    .project {
      padding-left: 40px;
      padding-right: 40px;
      padding-bottom: 20px;
    }

    .project__tech,
    p {
      width: 400px;

    }
    div.project__image {
      opacity: 0.7;
      top: 120px;

      img {
        right: -380px;
        width: 85%;
      }
    }
  }

  @media only screen and (max-width: 600px) {
    padding-bottom: 0px;
    .project {
      padding-left: 20px;
      padding-right: 20px;
      padding-bottom: 0px;
    }

    h1 {
      font-size: 28px;
    }
    p {
      font-size: 16px;
    }

    .project__tech,
    p {
      width: 100%;

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
