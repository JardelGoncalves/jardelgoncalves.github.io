import styled from 'styled-components';
import Headroom from 'react-headroom';

import logo from '../../assets/logos/icon.svg';
import logoWhite from '../../assets/logos/icon_white.svg';

export const Wrapper = styled(Headroom)`
  .headroom--pinned {
    background: #5C3BFE;

    a.logo {
      .logo__img {
        width: 60px;
        height: 60px;
        background-image: url(${logoWhite});
        background-size: 60px;
        background-repeat: no-repeat
      }
    }
  };

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

    .logo {
      .logo__img {
        width: 60px;
        height: 60px;
        background-image: url(${logo});
        background-size: 60px;
        background-repeat: no-repeat
      }
    }

    ul {
      display: flex;
      flex-direction: row;
      margin: 0;
      padding: 0;

      li {
        margin: 0 20px;

        a {
          text-decoration: none;
          font-size: 16px;
          color: #fff;
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


  @media only screen and (max-width: 800px) {
    header {
      ul {
        display: none;
      }
    }
  }
`;
