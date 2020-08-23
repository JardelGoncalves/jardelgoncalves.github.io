import React from 'react';

import { Wrap } from './styles';

import { Title, Timeline as TimeLineComponent } from '../../components';

const Timeline = ({ t }) => (
  <Wrap id="timeline">
    <Title text={t('timeline')} size={60} disableSvg={false} />
    <TimeLineComponent />
  </Wrap>
);

export { Timeline };
