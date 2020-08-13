import React from 'react';

import { Wave, SquareFooter } from '../Svg';

import { Wrap } from './styles';

export const Footer: React.FC = () => {
  return (
    <Wrap>
      <Wave />
      <SquareFooter />
      <h1>Theme</h1>
    </Wrap>
  )
}