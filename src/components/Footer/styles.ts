import styled from 'styled-components';

export const Wrap = styled.div`
  width: 100%;
  min-height: 440px;
  background-color: ${({ theme }) => theme.colors.primary};
  margin-top: 100px;
  position: relative;


  svg.wave {
    width: 100%;
    z-index: -1;
  }

  svg.square-footer {
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 0;
  }
`;

export const Row = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 100px 60px;

  div.column {
    z-index: 1;
    display: flex;
    flex-direction: column;
  }

  h1,
  .column {
    transition: all 0.2s ease-in-out;
  }

  @media only screen and (max-width: 950px) {
    padding-left: 60px;
    padding-right: 60px;
  }

  @media only screen and (max-width: 750px) {
    flex-direction: column;

    .column {
      padding: 40px 0;
    }
  }

  @media only screen and (max-width: 600px) {
    padding-left: 40px;
    padding-right: 40px;
    h1 {
      font-size: 50px;
    }
  }

  @media only screen and (max-width: 420px) {
    padding-left: 20px;
    padding-right: 20px;
    h1 {
      font-size: 40px;
    }
  }

`;

interface IListItems {
  row?: boolean | false;
}

export const ListItems = styled.ul<IListItems>`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: ${({ row }) => (row ? 'row' : 'column')};

  li {
    padding: 12px 0;
    padding-right: 20px;
    display: flex;
    align-items: center;

    a.item {
      display: flex;
      align-items: center;
      text-decoration: none;
      font-size: 18px;
      color: #fff;
      cursor: pointer;

      svg {
        margin-right: 12px;
      }
    }
  }
`;
