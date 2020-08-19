import React from 'react';

import { Wrap } from './styles';
import { Rain } from '../Svg';

export const Hello = () => (
  <Wrap className="typewriter">
    <Rain />
    <h1>
      Hello
      <span className="text-primary">,</span>
    </h1>
    <h2>
      My name is
      {' '}
      <span className="text-primary">Jardel Gonçalves</span>
    </h2>
    <span className="office">I&apos;m a Full Stack Developer</span>
  </Wrap>
);
