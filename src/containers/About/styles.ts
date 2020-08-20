import styled, { css } from 'styled-components';

const common = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between
`;

export const Wrap = styled.div`
  ${common};
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
`;
