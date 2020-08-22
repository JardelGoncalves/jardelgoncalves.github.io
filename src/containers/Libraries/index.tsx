import React from 'react';

import { Wrap } from './styles';

import {
  Title,
  LibrariesCard,
} from '../../components';

const Libraries = ({ t }) => (
  <Wrap>
    <Title text={t('libraries')} size={60} disableSvg={false} />
    <LibrariesCard
      textButton={t('libraries-text-button')}
      data={[
        {
          name: 'broleto',
          path: 'https://github.com/jardelgoncalves/broleto',
          description: t('libraries-broleto-desc'),
          logo: 'https://raw.githubusercontent.com/jardelgoncalves/broleto/master/logo.png',
        },
      ]}
    />
  </Wrap>
);

export { Libraries };
