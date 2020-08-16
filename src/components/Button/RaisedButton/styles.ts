import styled from 'styled-components';

interface IRaisedProp {
  color?: string;
  bg?: string;
  outline?: boolean | false;
  theme?: any;
}

export const Wrap = styled.button<IRaisedProp>`
  background-color: ${({ theme, bg, outline }) => {
    if (outline) return 'transparent';
    return bg || theme.colors.primary;
  }};
  color: ${({ theme, color, outline }) => {
    if (outline) return color || theme.colors.primary;
    return color || theme.colors.text;
  }};
  border: ${({ theme, bg, outline }) => {
    if (outline) return `2px solid ${bg || theme.colors.primary}`;
    return 'none';
  }};
  border-radius: 24px;
  height: 48px;
  max-width: 250px;
  padding: 16px 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 18px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme, bg }) => bg || theme.colors.primary};
    color: ${({ theme }) => theme.colors.text};
    opacity: 0.8;
  }
`;
