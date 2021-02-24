import styled from "styled-components";

export const Container = styled.nav`
  height: 70px;
  width: 100vw;
  border-bottom: 1px solid var(--navbar-border-color);
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 90px;
  transition: border .4s;


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
      background: linear-gradient(90deg, var(--secondary-color) 0%, var(--primary-color) 100%);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    span {
      font-size: 14px;
      color: var(--subtitle-color);
    }
  }

  .links {
    list-style: none;

    li + li {
      margin-left: 40px;
    }

    li a {
      color: var(--text-color);
      text-decoration: none;
      font-size: 16px;
      font-weight: 300;
      cursor: pointer;
      transition: 0.2s;
      line-height: 23px;

      &:hover {
        color: var(--primary-color);
      }
    }
  }

  .socials {
    a {
      svg {
        fill: var(--text-color);
      }
      &:hover {
        svg {
          transition: .2s;
          fill: var(--primary-color);
        }
      }
    }

    a + a {
      margin-left: 20px;
    }
  }
`;