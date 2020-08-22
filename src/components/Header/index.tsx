import React from 'react';
import Link from 'next/link';

import { Wrapper, Lang } from './styles';
import { Logo, USAFlag, PTBRFlag } from '../Svg';
import { Select } from '../Select';

import i18n from '../../../i18n';

const Header = ({ t }) => (
  <Wrapper>
    <header>
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
          <Link href="#skills">
            <a>
              {t('skills')}
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
        <li>
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
        </li>
      </ul>
    </header>
  </Wrapper>
);

export { Header };
