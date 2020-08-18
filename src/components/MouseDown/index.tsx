import React from 'react';
// eslint-disable-next-line
import { LinkProps } from 'next/link';

import {
  ScrollLink, Mouse, MouseContainer, Scroll,
} from './styles';

export const MouseDown = ({ href }: LinkProps) => (
  <ScrollLink href={href}>
    <a>
      <MouseContainer xmlns="http://www.w3.org/2000/svg" viewBox="0 0 76 130">
        <g fill="none">
          <Mouse width="70" height="118" x="1.5" y="1.5" rx="36" />
          <Scroll cx="36.5" cy="31.5" r="4.5" />
        </g>
      </MouseContainer>
    </a>
  </ScrollLink>
);
