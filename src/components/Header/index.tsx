import React from 'react';
import Link from 'next/link';

import { Wrapper, Lang } from './styles';
import { Logo, USAFlag, PTBRFlag } from '../Svg';
import { Select } from '../Select';
import { HamburgerMenu } from '../HamburgerMenu';

import i18n from '../../../i18n';

interface IProps {
  t: (text:string) => string
  menuActive: boolean
  onClick: () => void;
}

const Header = ({ t, onClick, menuActive }:IProps) => (
  <Wrapper>
    <header>
      <HamburgerMenu onClick={onClick} menuActive={menuActive} />
      <Link href="/">
        <a className="logo">
          <Logo />
        </a>
      </Link>
      <ul>
        <li>
          <Link href="#about-me">
            <a>
              {t('about-me')}
            </a>
          </Link>
        </li>
        <li>
          <Link href="#projects">
            <a>
              {t('projects')}
            </a>
          </Link>
        </li>
        <li>
          <Link href="#skills">
            <a>
              {t('skills')}
            </a>
          </Link>
        </li>
        <li>
          <Link href="#timeline">
            <a>
              {t('timeline')}
            </a>
          </Link>
        </li>
        <li>
          <Link href="#timeline">
            <a>
              {t('blog')}
            </a>
          </Link>
        </li>
      </ul>
      <div className="container__lang">
        <Select
          onChange={(op) => i18n.i18n.changeLanguage(op.value)}
          options={[
            {
              label: (
                <Lang>
                  <PTBRFlag />
                </Lang>
              ),
              value: 'pt',
            },
            {
              label: (
                <Lang>
                  <USAFlag />
                </Lang>
              ),
              value: 'en',
            },
          ]}
          defaultValue={{
            label: (
              <Lang>
                <PTBRFlag />
              </Lang>
            ),
            value: 'pt',
          }}
        />
      </div>
    </header>
  </Wrapper>
);

export { Header };
