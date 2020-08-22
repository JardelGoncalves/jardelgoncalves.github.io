import React from 'react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

import { Wrap } from './styles';

import {
  Title,
  Avatar,
  IconButton,
  LinkButton,
} from '../../components';

const About = ({ t }) => (
  <Wrap id="about-me">
    <div className="about__content">
      <Title text={t('about-me')} size={60} disableSvg={false} />
      <p>
        {t('about-me-description')}
        {' '}
        <strong className="about__content--bold">{t('about-me-description-ph')}</strong>
      </p>
      <div className="about__content__footer">
        <LinkButton
          text={t('btn-download-cv')}
          path="#"
          isExternal
          border="ALL"
          color="#fff"
        />
        <div className="about__content__footer__social">
          <IconButton path="#" icon={<FiGithub />} outline />
          <IconButton path="#" icon={<FiLinkedin />} outline />
        </div>
      </div>
    </div>
    <Avatar url="/static/imgs/avatar.webp" />
  </Wrap>
);

export { About };
