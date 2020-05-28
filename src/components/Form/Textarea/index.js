import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';
import MessageError from '../MessageError';

const Textarea = ({
  className,
  value,
  placeholder,
  rows,
  messageError,
  onChange,
}) => (
  <Wrapper>
    <textarea
      className={className}
      placeholder={placeholder}
      rows={rows}
      value={value}
      onChange={onChange}
    />
    {messageError && <MessageError text={messageError} />}
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
