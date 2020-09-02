import styled from 'styled-components';

export const Wrap = styled.div`
  padding: 100px 80px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .mouse-down {
    margin-top: 60px;
  }

  .wave-top {
    position: absolute;
    top: 0;
    right: 0;
  }

  @media only screen and (max-width: 600px) {
    padding-left: 40px;
    padding-right: 40px;
  }

  @media only screen and (max-width: 420px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;
