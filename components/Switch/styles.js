import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  width: 44px;
  border: 2px solid ${({ checked }) => checked ? 'rgba(56, 238, 125, 0.2)' : 'rgba(97, 100, 105, 0.2)'};
  height: 24px;
  border-radius: 34px;


  input {
    position: relative;
    z-index: 1;
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }

  .slider {
    position: absolute;
    height: 28px;
    width: 28px;
    left: -2px;
    bottom: -4px;
    background-color: #616469;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      margin-top: 4px;
    }

    transition: 0.2s;
  }

  input:checked + .slider {
    background-color: #38EF7D;
    left: 16px;

    svg {
      fill: #fff;
    }
  }

  /* input:focus + .slider {
    box-shadow: 0 0 1px black;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  } */
`;
