import React from 'react';
import ReactSelect from 'react-select';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';

const Select = ({ className, options, placeholder, onChange }) => {
  const selectStyle = {
    control: (styles) => ({
      ...styles,
      backgroundColor: 'transparent',
      border: '2px solid #fff',
      borderRadius: 16,
      height: 50,

      ':hover': {
        ...styles[':hover'],
        border: '2px solid #fff',
      },

      ':focus': {
        ...styles[':hover'],
        border: '2px solid #fff',
      },
    }),
    option: (styles, { isDisabled, isFocused, isSelected }) => ({
      ...styles,
      backgroundColor: isDisabled
        ? null
        : isSelected
        ? '#5C3BFE'
        : isFocused
        ? '#5C3BFE33'
        : null,
      color: isDisabled
        ? '#fff'
        : isSelected
        ? '#fff'
        : '#5C3BFE',
      cursor: isDisabled ? 'not-allowed' : 'default',
      fontFamily: 'Gilroy ExtraBold',
      fontSize: 17,

      ':active': {
        ...styles[':active'],
        backgroundColor: '#fff',
      },
    }),
    singleValue: (styles) => ({ ...styles, color: '#fff' }),
  };

  return (
    <Wrapper>
      <ReactSelect
        styles={selectStyle}
        placeholder={placeholder}
        options={options}
        onChange={onChange}
        className={className}
      />
    </Wrapper>
  );
};

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string,
  })),
  placeholder: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func,
};

Select.defaultProps = {
  options: [],
};

export default Select;
