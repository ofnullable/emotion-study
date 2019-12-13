import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

function Input({ id, label, type, value, width, fullWidth, onChange }) {
  return (
    <div css={inputStyle(width, fullWidth)}>
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} value={value} onChange={onChange} />
    </div>
  );
}

Input.defaultProps = {
  type: 'text',
};

const inputStyle = (width, fullWidth) => css`
  width: ${fullWidth ? '100%' : width ? width : 'auto'};

  label {
    display: block;
  }

  & > input {
    width: 100%;
    padding: 4px 10px;
    border: 1px solid #9e9e9e;
    border-radius: 5px;
  }
`;

export default Input;
