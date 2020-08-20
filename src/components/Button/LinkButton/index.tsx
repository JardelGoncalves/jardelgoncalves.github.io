import React from 'react';
import Link from 'next/link';

import { Wrap } from './styles';

interface ILinkProps {
  hoverColor?: string;
  borderColor?: string;
  maxWidth?: number;
  border?: 'ALL' | 'BOTTOM' | 'TOP';
  size?: number;
  text?: string;
  path?: string,
  isExternal?: boolean | false;
  outline?: boolean | false;
  color?: string;
}
const LinkButton = ({
  hoverColor, borderColor, maxWidth, border, size, text, path, isExternal, outline, color,
}: ILinkProps) => (
  isExternal
    ? (
      <Wrap
        href={path}
        target="_blank"
        rel="noopener noreferrer"
        hoverColor={hoverColor}
        borderColor={borderColor}
        maxWidth={maxWidth}
        border={border}
        size={size}
        outline={outline}
        color={color}
      >
        {text}
      </Wrap>
    )
    : (
      <Link href={path || '#'}>
        <Wrap
          hoverColor={hoverColor}
          borderColor={borderColor}
          maxWidth={maxWidth}
          border={border}
          size={size}
          outline={outline}
          color={color}
        >
          {text}
        </Wrap>
      </Link>
    )
);

export { LinkButton };
