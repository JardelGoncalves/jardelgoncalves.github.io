import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';

const Input = ({ className, type, placeholder, value, onChange }) => (
  <Wrapper className={className}>
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  </Wrapper>
);

Input.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onChange: PropTypes.func,
};

Input.defaultProps = {
  type: 'text',
  className: '',
};

export default Input;
