import React from 'react';

import { Wrapper, Bar } from './styles';

interface IProgressBar {
  percentage?: number | 10;
  label?: string;
  color?: string ;
  bg?: string ;
}

const ProgressBar = ({
  percentage, label, color, bg,
}: IProgressBar) => (
  <Wrapper color={color} bg={bg} className="progress-bar">
    <span className="label">{label}</span>
    <Bar percentage={percentage} color={color}>
      <div>
        <span>
          {percentage ? `${percentage}%` : ''}
        </span>
      </div>
    </Bar>
  </Wrapper>
);

export { ProgressBar };
