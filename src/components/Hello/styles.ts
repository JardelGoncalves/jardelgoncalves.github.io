import styled from 'styled-components';

export const Wrap = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  svg {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 0;
    width: 100%;
    height: auto;
    margin: auto;
  }

  h1, h2, span {
    z-index: 1;
    color: #fff;
  }

  h1 {
    font-size: 70px;
  }
  h2 {
    font-size: 40px;
  }

  h2, span.office {
    margin-top: 8px;
  }

  span.office {
    font-size: 16px;
  }

  span.text-primary {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media only screen and (max-width: 600px) {
    h2 {
      padding: 0;
      margin-top: 0px;
      text-align: center;
    }
  }

  @media only screen and (max-width: 420px) {
    h2 {
      padding: 0;
      margin: 0;
      margin-top: -20px;
      font-size: 35px;
    }
  }
`;
