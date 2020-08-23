import React from 'react';

import { Wrap } from './styles';

import {
  Title,
  ProgressBar,
} from '../../components';

const Skills = ({ t }) => (
  <Wrap id="skills">
    <Title text={t('skills')} size={60} disableSvg={false} />
    <div className="row">
      <div className="column">
        <ProgressBar label="HTML/CSS" percentage={70} />
        <ProgressBar label="React.js" percentage={80} />
        <ProgressBar label="React Native" percentage={70} />
        <ProgressBar label="Next.js" percentage={70} />
        <ProgressBar label="Gatsby" percentage={65} />
        <ProgressBar label="Docker" percentage={70} />
        <ProgressBar label="Gulp" percentage={60} />
      </div>
      <div className="column">
        <ProgressBar label="Javascript" percentage={80} />
        <ProgressBar label="Typescript" percentage={70} />
        <ProgressBar label="Node.js" percentage={70} />
        <ProgressBar label="Linux" percentage={70} />
        <ProgressBar label="MongoDB" percentage={75} />
        <ProgressBar label="PostgreSQL" percentage={70} />
        <ProgressBar label="MySQL" percentage={70} />
      </div>
    </div>
  </Wrap>
);

export { Skills };
