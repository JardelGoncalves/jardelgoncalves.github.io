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
  path: string,
  isExternal: boolean;
}
export const LinkButton = ({
  hoverColor, borderColor, maxWidth, border, size, text, path, isExternal,
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
      >
        {text}
      </Wrap>
    )
    : (
      <Link href={path}>
        <Wrap
          hoverColor={hoverColor}
          borderColor={borderColor}
          maxWidth={maxWidth}
          border={border}
          size={size}
        >
          {text}
        </Wrap>
      </Link>
    )
);
