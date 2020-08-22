import React, { useEffect } from 'react';
import { init } from 'ityped';

import { Wrap } from './styles';
import { Rain } from '../Svg';

const Hello = ({ t }) => {
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
        {t('hello')}
        <span className="text-primary">,</span>
      </h1>
      <h2>
        {t('apresentation')}
        {' '}
        <span className="text-primary" id="my-name" />
      </h2>
      <span className="office">{t('office')}</span>
    </Wrap>
  );
};

export { Hello };
