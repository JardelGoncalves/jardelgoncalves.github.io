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
`;
