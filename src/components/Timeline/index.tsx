import React from 'react';
import { MdWork, MdSchool } from 'react-icons/md';

import { Wrapper, TimelineWrapper, TimelineElement } from './styles';

const Timeline = ({ t }) => (
  <Wrapper>
    <TimelineWrapper className="vertical-timeline-custom-line active">
      <TimelineElement
        date={t('timeline-cm-date')}
        icon={<MdWork />}
      >
        <h3 className="vertical-timeline-element-title">
          {t('timeline-cm-title')}
        </h3>
        <p>
          {t('timeline-cm-description')}
        </p>
      </TimelineElement>
      <TimelineElement
        date={t('timeline-hub-date')}
        icon={<MdWork />}
      >
        <h3 className="vertical-timeline-element-title">
          {t('timeline-hub-title')}
        </h3>
        <p>
          {t('timeline-hub-description')}
        </p>
      </TimelineElement>
      <TimelineElement
        date={t('timeline-code-date')}
        icon={<MdSchool />}
      >
        <h3 className="vertical-timeline-element-title">
          {t('timeline-code-title')}
        </h3>
        <p>
          {t('timeline-code-description')}
        </p>
      </TimelineElement>
      <TimelineElement
        date={t('timeline-ufc-date')}
        icon={<MdSchool />}
      >
        <h3 className="vertical-timeline-element-title">
          {t('timeline-ufc-title')}
        </h3>
        <p>
          {t('timeline-ufc-description')}
        </p>
      </TimelineElement>
    </TimelineWrapper>
  </Wrapper>
);

export { Timeline };
