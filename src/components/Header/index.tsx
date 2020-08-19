import React from 'react';
import Link from 'next/link';

import { Wrapper } from './styles';
import { Logo } from '../Svg';

export const Header = () => (
  <Wrapper>
    <header>
      <Link href="#about-me">
        <a className="logo">
          <Logo />
        </a>
      </Link>
      <ul>
        <li>
          <Link href="#skills">
            <a>
              Habilidades
            </a>
          </Link>
        </li>
        <li>
          <Link href="#libraries">
            <a>
              Bibliotecas
            </a>
          </Link>
        </li>
        <li>
          <Link href="#projects">
            <a>
              Projetos
            </a>
          </Link>
        </li>
        <li>
          <Link href="#timeline">
            <a>
              Linha do tempo
            </a>
          </Link>
        </li>
      </ul>
    </header>
  </Wrapper>
);
