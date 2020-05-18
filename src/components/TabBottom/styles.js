import styled from 'styled-components';


export const Wrapper = styled.header`
  width: 100%;
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  height: 80px;
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  z-index: 100;

  ul {
    display: flex;
    margin: 0;
    padding: 0;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;


    li {
      margin: 0;

      a {
        text-decoration: none;
        font-size: 10px;
        color: #fff;
        padding: 8px 6px;
        border-bottom: 2px solid transparent;
        display: flex;
        flex-direction: column;
        align-items: center;

        &:hover {
          border-bottom: 2px solid #fff;
          transition: all 0.2s ease-in-out;
        }

        svg {
          font-size: 24px;
        }

        span {
          margin-top: 6px;
        }
      }
    }
  }

  @media only screen and (max-width: 800px) {
    display: flex;
    background-color: #5C3BFE;
    box-shadow: 0px 10px 30px -2px rgba(0,0,0,0.6);
  }
`;
