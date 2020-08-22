import styled from 'styled-components';
import Headroom from 'react-headroom';

export const Wrapper = styled(Headroom)`
  z-index: 10000;
  .headroom--pinned {
    background: ${({ theme }) => theme.colors.primary};
    -webkit-box-shadow: 0px 23px 28px -30px rgba(0,0,0,0.52);
    -moz-box-shadow: 0px 23px 28px -30px rgba(0,0,0,0.52);
    box-shadow: 0px 23px 28px -30px rgba(0,0,0,0.52);
  };

  .headroom {
    transition: all 0.2s ease-in-out;
  }
  
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  header {
    height: 80px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 80px;

    .logo svg {
      width: 70px;
      height: auto;
    }
    ul {
      display: flex;
      flex-direction: row;
      list-style: none;
      margin: 0;
      padding: 0;
      align-items: center;
      li {
        margin: 0 20px;
        padding: 0;
        a {
          text-decoration: none;
          font-size: 16px;
          color: #fff;
          font-weight: 700;
          padding: 8px 6px;
          border-bottom: 2px solid transparent;
          &:hover {
            border-bottom: 2px solid #fff;
            transition: all 0.2s ease-in-out;
          }
        }
      }
    }
  }
`;

export const Lang = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  svg {
    padding: 0;
    margin: 0;
    width: 25px;
    height: auto;
  }
`;
