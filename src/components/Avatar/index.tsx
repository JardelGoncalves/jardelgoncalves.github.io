import React from 'react';

import { Wrap } from './styles';

type IProp = {
  url: string;
}

export const Avatar = ({ url }: IProp) => (
  <Wrap alt="Avatar" src={url} />
);
