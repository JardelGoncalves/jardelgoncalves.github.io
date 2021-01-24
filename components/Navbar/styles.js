import styled from "styled-components";

export const Container = styled.nav`
  height: 70px;
  width: 100vw;
  background-color: #ffffff;
  border-bottom: 1px solid #f0f0f0;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 90px;


  .logo,
  .links,
  .socials,
  .theme-toggle {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .logo .title {
    margin-left: 12px;

    h4 {
      font-size: 20px;
      font-weight: 900;
      background: linear-gradient(90deg, #11998E 0%, #38EF7D 100%);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    span {
      font-size: 14px;
      color: #7C7C7C;
    }
  }

  .links {
    list-style: none;

    li + li {
      margin-left: 40px;
    }

    li a {
      color: #616269;
      text-decoration: none;
      font-size: 16px;
      font-weight: 300;
      cursor: pointer;
      transition: 0.2s;
      line-height: 23px;

      &:hover {
        color: #38EF7D;
      }
    }
  }

  .socials {
    a {
      &:hover {
        svg {
          transition: .2s;
          fill: #38EF7D;
        }
      }
    }

    a + a {
      margin-left: 20px;
    }
  }
`;