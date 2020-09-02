import styled, { css } from 'styled-components';

const common = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Wrap = styled.div`
  padding: 0 80px;
  padding-top: 100px;
  padding-bottom: 80px;
  display: flex;
  flex-direction: column;

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
    padding-left: 60px;
    padding-right: 60px;
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
      font-size: 35px;
    }
  }
`;
