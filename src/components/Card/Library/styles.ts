import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 0;
  position: relative;
  .container {
    padding: 30px;
    display: flex;
    flex-direction: row;
  };

`;

export const Box = styled.div`
  min-width: 300px;
  max-width: 300px;
  width: 100%;
  height: 310px;
  background-color: ${({ theme }) => theme.colors.dark1};
  display: flex;
  flex-direction: column;
  padding: 16px;
  padding-top: 50px;
  position: relative;
  margin-left: 70px;
  border-radius: 8px;

  h5 {
    font-size: ${({ theme }) => theme.fonts.desktop.h5};
  }

  p {
    font-size: 15px;
    line-height: 165.14%;
    margin-top: 16px;
    opacity: 0.8;
  }

  h5,
  p {
    color: #fff;
  }

  a {
    position: absolute;
    left: 0;
    bottom: 16px;
    right: 0;
    margin: auto;
  }
`;

export const LogoWrapper = styled.div`
  position: absolute;
  top: -30px;
  left: 16px;
  width: 64px;
  height: 64px;
  background-color: ${({ theme }) => theme.colors.dark2};
  padding: 4px;
  border-radius: 8px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 8px;
  }
`;
