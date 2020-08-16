import styled from 'styled-components';

export const Wrap = styled.div`
  width: 100%;
  min-height: 440px;
  background-color: ${({ theme }) => theme.colors.primary};
  margin-top: 100px;
  position: relative;
  z-index: -1;


  svg.wave {
    width: 100%;
    position: absolute;
    top: -40px;
    left: 0;
    z-index: -1;
  }

  svg.square-footer {
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
  padding: 60px;

  div.column {
    display: flex;
    flex-direction: column;
  }
`;
