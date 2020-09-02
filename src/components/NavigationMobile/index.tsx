import React from 'react';
import Link from 'next/link';

import { Wrapper } from './styles';

interface IProps {
  t: (text:string) => string
  onClick: () => void
  menuActive: boolean
}

const NavigationMobile = ({ t, menuActive, onClick }:IProps) => (
  <Wrapper>
    <ul className={menuActive ? 'navigation' : ''}>
      <li>
        <Link href="#about-me">
          <a
            data-text={t('about-me')}
            onClick={() => {
              onClick();
            }}
          >
            {t('about-me')}
          </a>
        </Link>
      </li>
      <li>
        <Link href="#projects">
          <a
            data-text={t('projects')}
            onClick={() => {
              onClick();
            }}
          >
            {t('projects')}
          </a>
        </Link>
      </li>
      <li>
        <Link href="#skills">
          <a
            data-text={t('skills')}
            onClick={() => {
              onClick();
            }}
          >
            {t('skills')}
          </a>
        </Link>
      </li>
      <li>
        <Link href="#timeline">
          <a
            data-text={t('timeline')}
            onClick={() => {
              onClick();
            }}
          >
            {t('timeline')}
          </a>
        </Link>
      </li>
      <li>
        <Link href="#timeline">
          <a
            data-text={t('blog')}
            onClick={() => {
              onClick();
            }}
          >
            {t('blog')}
          </a>
        </Link>
      </li>
    </ul>
  </Wrapper>
);

export { NavigationMobile };
