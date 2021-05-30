import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
  width: 44px;
  border: 2px solid ${({ theme }) => theme.colors.switchModeBorder};
  background-color: ${({ theme }) => theme.colors.switchModeBg};
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
    background-color: ${({ theme }) => theme.colors.sliderBgColor};
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
    background: ${({ theme }) => theme.colors.primary900};
    left: 1rem;

    svg {
      fill: ${({ theme }) => theme.colors.white};
    }
  }
`
