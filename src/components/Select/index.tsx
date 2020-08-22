/* eslint-disable no-nested-ternary */
import React from 'react';
import ReactSelect from 'react-select';
import { Wrapper } from './styles';

interface ISelect {
  className?: string;
  placeholder?: string;
  onChange?: (op:any) => void;
  options?: any[];
  defaultValue?: any;
}

const Select = ({
  className,
  options,
  placeholder,
  onChange,
  defaultValue,
}: ISelect) => {
  const selectStyle = {
    control: (styles) => ({
      ...styles,
      backgroundColor: '#00000015',
      border: '2px solid #fff',
      borderRadius: 25,
      height: 40,

      ':hover': {
        ...styles[':hover'],
        border: '2px solid #fff',
      },

      ':focus': {
        ...styles[':focus'],
        border: '2px solid #fff',
      },
    }),
    option: (styles, { isDisabled, isFocused, isSelected }) => ({
      ...styles,
      backgroundColor: isDisabled
        ? null
        : isSelected
          ? '#ffffff'
          : isFocused
            ? '#ffffff'
            : null,
      color: isDisabled
        ? '#fff'
        : isSelected
          ? '#fff'
          : '#5BCA5D',
      cursor: isDisabled ? 'not-allowed' : 'default',
      fontFamily: 'Inter',
      fontSize: 17,

      ':active': {
        ...styles[':active'],
        backgroundColor: '#fff',
      },
    }),
    singleValue: (styles) => ({
      ...styles, color: '#fff',
    }),
    placeholder: (defaultStyles) => ({
      ...defaultStyles,
      color: '#ffffff',
      fontFamily: 'Inter',
      fontSize: 17,
    }),
  };

  return (
    <Wrapper>
      <ReactSelect
        styles={selectStyle}
        placeholder={placeholder}
        options={options}
        defaultValue={defaultValue}
        onChange={onChange}
        className={className}
        noOptionsMessage={() => 'Nenhuma opção encontrada'}
      />
    </Wrapper>
  );
};

export { Select };
