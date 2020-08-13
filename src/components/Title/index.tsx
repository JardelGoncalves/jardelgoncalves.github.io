import React from 'react';
import { Wrap } from './styles';

 interface IProps {
  text?: string;
  size?: number;
  color?: string;
}

export const Title: React.FC <IProps> = ({ text, size, color }: IProps) => (
  <Wrap size={size} color={color}>
    {text}
    <svg width="20" height="19" viewBox="0 0 20 19">
      <rect x="10.071" width="13" height="13" transform="rotate(45 10.071 0)" fill="#5BCA5D" />
    </svg>
  </Wrap>
);
