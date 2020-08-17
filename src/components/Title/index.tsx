import React from 'react';
import { Wrap } from './styles';

 interface IProps {
  text?: string;
  size?: number;
  color?: string;
  disableSvg?: boolean | true;
}

export const Title: React.FC <IProps> = ({
  text, size, color, disableSvg,
}: IProps) => (
  <Wrap size={size} color={color}>
    {text}
    {disableSvg && (
      <svg width="20" height="19" viewBox="0 0 20 19">
        <rect x="10.071" width="13" height="13" transform="rotate(45 10.071 0)" />
      </svg>
    )}
  </Wrap>
);
