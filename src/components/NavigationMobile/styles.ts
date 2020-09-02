import styled from 'styled-components';

export const Wrapper = styled.div`
  display: none;
  @media only screen and (max-width: 900px) {
  display: flex;
    ul {
      display: none;
    }

    ul.navigation {
      position: fixed;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background-color: ${({ theme }) => theme.colors.primary};
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      z-index: 1000;
      list-style: none;
      li {
        margin: 20px 20px;
        padding: 0;
        a {
          text-decoration: none;
          font-size: 30px;
          font-weight: 700;
          padding: 5px 30px;
          border-bottom: 2px solid transparent;
          transition: 0.5s;
          color: #ffffff66;
          border-radius: 30px;
        }
        &:hover {
          a {
            background-color: #fff;
            color: ${({ theme }) => theme.colors.primary};
          }
        }
      }
    }

    ul li a:before {
      content: "";
      position: absolute;
      top: 50%;
      left: 40%;
      transform: translate(-50%, -50%);
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 5rem;
      color: #ffffff;
      border-radius: 50%;
      z-index: -1;
      opacity: 0;
      font-weight: 900;
      text-transform: uppercase;
      letter-spacing: 500px;
      transition: letter-spacing 0.5s, left 0.5s;
    }

    ul li a:hover:before {
      content: attr(data-text);
      opacity: 0.2;
      left: 50%;
      letter-spacing: 10px;
      width: 500px;
      height: 500px;
    }
  }
`;
