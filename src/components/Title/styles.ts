import styled from 'styled-components';

export declare interface IProps {
  size?: number;
  color?: string;
  theme?: any;
}

export const Wrap = styled.h1<IProps>`
  padding: 0;
  margin: 0;
  margin-bottom: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: ${({ theme, size }) => (size ? `${size}px` : theme.fonts.desktop.h1)};
  color: ${({ theme, color }) => color || theme.colors.text};
  font-weight: 900;
  font-family: 'Inter', sans-serif;

  svg {
    margin-left: 10px;
    color: ${({ theme, color }: IProps) => color || theme.colors.primary};
    fill: ${({ theme, color }: IProps) => color || theme.colors.primary};
  }
`;
