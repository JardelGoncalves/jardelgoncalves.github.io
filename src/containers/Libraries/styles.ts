import styled, { css } from 'styled-components';

const common = css`
  display: flex;
  flex-direction: column;
`;

export const Wrap = styled.div`
  ${common};
  padding-top: 110px;
  padding-bottom: 80px;
  padding-left: 0;

  h1 {
    margin-left: 80px;
  }

  h1 {
    transition: all 0.2s ease-in-out;
  }

  @media only screen and (max-width: 950px) {
    h1 {
      margin-left: 60px;
    }
  }
  @media only screen and (max-width: 600px) {
    h1 {
      margin-left: 40px;
      font-size: 50px;
    }
  }

  @media only screen and (max-width: 420px) {
    h1 {
      margin-left: 20px;
      font-size: 40px;
    }
  }
`;
