import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  span {
    font-size: 18px;
    font-family: 'Gilroy ExtraBold';
    color: #fff;
    margin-bottom: 8px;
  }

  input {
    height: 50px;
    width: 100%;
    border-radius: 16px;
    border: 2px solid #fff;
    background-color: transparent;
    display: flex;
    align-items: center;
    padding: 0 8px;
    font-size: 17px;
    color: #fff;
    font-family: 'Gilroy ExtraBold';
  }
`;
