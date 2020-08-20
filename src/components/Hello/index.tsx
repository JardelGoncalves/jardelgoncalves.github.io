import React, { useEffect } from 'react';
import { init } from 'ityped';

import { Wrap } from './styles';
import { Rain } from '../Svg';

const Hello = () => {
  useEffect(() => {
    const myElement = document.querySelector('#my-name');
    init(myElement, {
      showCursor: false,
      strings: ['Jardel Gonçalves'],
      loop: false,
      typeSpeed: 80,
    });
  }, []);

  return (
    <Wrap className="hello">
      <Rain />
      <h1>
        Hello
        <span className="text-primary">,</span>
      </h1>
      <h2>
        My name is
        {' '}
        <span className="text-primary" id="my-name" />
      </h2>
      <span className="office">I&apos;m a Full Stack Developer</span>
    </Wrap>
  );
};

export { Hello };
