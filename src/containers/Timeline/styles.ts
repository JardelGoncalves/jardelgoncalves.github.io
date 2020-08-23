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
`;
