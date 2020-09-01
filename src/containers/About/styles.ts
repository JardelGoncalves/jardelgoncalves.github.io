import styled, { css } from 'styled-components';

const common = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Wrap = styled.div`
  ${common};
  padding: 0 80px;
  padding-top: 50px;
  padding-bottom: 80px;

  .about__content {
    max-width: 720px;
    width: 100%;
    display: flex;
    flex-direction: column;

    p {
      margin-top: 12px;
      color: #fff;
      line-height: 170.14%;

      .about__content--bold {
        font-weight: 900;
        color: ${({ theme }) => theme.colors.primary};
      }
    }

    .about__content__footer {
      margin-top: 70px;
      ${common};

      .about__content__footer__social {
        ${common};
        justify-content: flex-start;
        a {
          margin: 0 4px;
        }
      }
    }
  }

  h1,
  .about__content {
    transition: all 0.2s ease-in-out;
  }


  @media only screen and (max-width: 950px) {
    flex-direction: column-reverse;
    padding-left: 60px;
    padding-right: 60px;

    .about__content {
      margin-top: 50px;
    }
  }

  @media only screen and (max-width: 600px) {
    padding-left: 40px;
    padding-right: 40px;
    h1 {
      font-size: 50px;
    }
  }

  @media only screen and (max-width: 420px) {
    padding-left: 20px;
    padding-right: 20px;
    h1 {
      font-size: 40px;
    }
  }
`;
