import styled from 'styled-components';

export const Wrap = styled.div`
  width: 100%;
  min-height: 440px;
  background-color: ${({ theme }) => theme.colors.primary};
  position: relative;
  margin-top: 100px;
  padding: 100px 116px;

  svg.wave {
    position: absolute;
    top: -40px;
    left: 0;
    width: 100%;
  }

  svg.square-footer {
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 0;
  }
`;
