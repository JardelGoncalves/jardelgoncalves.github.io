import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
  width: 2.75rem;
  border: 2px solid ${({ theme }) => theme.colors.switchModeBorder};
  background-color: ${({ theme }) => theme.colors.switchModeBg};
  height: 1.5rem;
  border-radius: ${({ theme }) => theme.shapes.borderRadius.md};

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
    height: 1.75rem;
    width: 1.75rem;
    left: -0.125rem;
    bottom: -0.25rem;
    background-color: ${({ theme }) => theme.colors.sliderBgColor};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0;
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
