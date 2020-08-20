/* eslint-disable indent */
/* eslint-disable curly */

import styled from 'styled-components';

interface IIconButtonProps {
  color?: string;
  strokeHoverColor?: string;
  bg?: string;
  outline?: boolean | false;
  theme?: any;
}

export const Wrap = styled.a<IIconButtonProps>`
  background-color: ${({ theme, bg, outline }) => {
    if (outline) return 'transparent';
    return bg || theme.colors.primary;
  }};
  border: ${({ theme, bg, outline }) => {
    if (outline) return `2px solid ${bg || theme.colors.primary}`;
    return 'none';
  }};
  border-radius: 50%;
  height: 48px;
  width: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 18px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);

  svg, .icon {
    transition: all 0.2s ease-in-out;
    color: ${({ theme, color, outline }) => {
      if (outline) return color || theme.colors.primary;
      return color || theme.colors.text;
    }};
    stroke: ${({ theme, color }) => color || theme.colors.primary};
  }

  &:hover {
    background-color: ${({ theme, bg }) => bg || theme.colors.primary};
    opacity: 0.8;
    svg {
      stroke: ${({ theme, strokeHoverColor }) => strokeHoverColor || theme.colors.text};
      color: ${({ theme, strokeHoverColor }) => strokeHoverColor || theme.colors.text};
    }
  }
`;
