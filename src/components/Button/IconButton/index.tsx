import React from 'react';

import { Wrap } from './styles';

interface IIconButtonProps {
  color?: string;
  bg?: string;
  outline?: boolean | false;
  icon?: React.ReactNode;
  strokeHoverColor?: string;
  path: string,
}
const IconButton = ({
  color, bg, outline, icon, path, strokeHoverColor,
}: IIconButtonProps) => (
  <Wrap
    href={path}
    target="_blank"
    rel="noopener noreferrer"
    color={color}
    bg={bg}
    outline={outline}
    strokeHoverColor={strokeHoverColor}
  >
    {icon}
  </Wrap>
);

export { IconButton };
