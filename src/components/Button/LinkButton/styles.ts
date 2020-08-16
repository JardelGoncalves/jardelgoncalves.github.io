/* eslint-disable indent */
/* eslint-disable curly */
import styled, { css } from 'styled-components';

interface ILinkProps {
  hoverColor?: string;
  borderColor?: string;
  maxWidth?: number;
  border?: 'ALL' | 'BOTTOM' | 'TOP';
  size?: number;
  theme?: any;
}

export const Wrap = styled.a<ILinkProps>`
  background-color: transparent;
  height: 48px;
  max-width: ${({ maxWidth }) => (maxWidth ? `${maxWidth}px` : '250px')};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme, size }) => (size ? `${size}px` : theme.fonts.desktop.p)};
  color: ${({ theme, borderColor }) => borderColor || theme.colors.primary};
  border: none;
  text-decoration: none;
  ${({
    theme, border, borderColor, hoverColor,
  }) => {
    if (border && border === 'TOP') return css`
        border-top: 2px solid ${borderColor || theme.colors.primary}; 
      `;
    if (border && border === 'ALL') return css`
        border: 2px solid ${borderColor || theme.colors.primary}; 
        border-radius: 24px;
        &:hover {
          background-color: ${borderColor || theme.colors.primary};
          color: ${hoverColor || theme.colors.text}
        }
      `;
    return css`
      border-bottom: 2px solid ${borderColor || theme.colors.primary}; 
    `;
  }};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  padding: 13 30px;

  &:hover {
    opacity: 0.8;
  }
`;
