import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Bar } from './styles';

const Skill = ({ percentage, label, className }) => (
  <Wrapper className={className}>
    <span className="label">{label}</span>
    <Bar percentage={percentage}>
      <div>
        <span>
          {percentage ? `${percentage}%` : ''}
        </span>
      </div>
    </Bar>
  </Wrapper>
);

Skill.propTypes = {
  percentage: PropTypes.number,
  label: PropTypes.string,
  className: PropTypes.string,
};

Skill.defaultProps = {
  percentage: 10,
  label: '',
};

export default Skill;
