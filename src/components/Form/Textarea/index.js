import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';

const Textarea = ({ className, value, placeholder, rows, onChange }) => (
  <Wrapper>
    <textarea
      className={className}
      placeholder={placeholder}
      rows={rows}
      value={value}
      onChange={onChange}
    />
  </Wrapper>
);

Textarea.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  rows: PropTypes.number,
  onChange: PropTypes.func,
};

Textarea.defaultProps = {
  rows: 5,
};

export default Textarea;
