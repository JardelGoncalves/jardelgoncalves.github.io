import styled, { css } from 'styled-components';

const common = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Wrap = styled.div`
  padding: 0 80px;
  padding-top: 50px;
  padding-bottom: 80px;
  display: flex;
  flex-direction: column;

  .row,
  .row .column, 
  .row .column .progress-bar .progress-bar__bar,
  h1 {
    transition: all 0.2s ease-in-out;
  }

  .row {
    ${common};
    align-items: flex-start;

    .column {
      ${common};
      flex-direction: column;
      align-items: flex-start;
      .progress-bar {
        padding: 12px 0;
      }
    }
  }

  @media only screen and (max-width: 950px) {
    padding: 0 60px;

    .row {
      display: flex;
      flex-direction: column;

      .column {
        width: 100%;
        .progress-bar {
          width: 100%;
          .progress-bar__bar {
            width: 100%;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 600px) {
    padding: 0 40px;

    h1 {
      font-size: 50px;
    }
  }

  @media only screen and (max-width: 420px) {
    padding: 0 20px;

    h1 {
      font-size: 40px;
    }
  }
`;
