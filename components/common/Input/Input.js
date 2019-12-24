import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

function Input({ id, theme, label, type, value, width, fullWidth, onChange }) {
  return (
    <div css={[inputStyle(width, fullWidth)]}>
      <label css={[themes[theme]]} htmlFor={id}>
        {label}
      </label>
      <input id={id} type={type} value={value} onChange={onChange} />
    </div>
  );
}

Input.defaultProps = {
  type: 'text',
  theme: 'default',
};

const inputStyle = (width, fullWidth) => css`
  width: ${fullWidth ? '100%' : width ? width : 'auto'};

  label {
    display: block;
  }

  & > input {
    width: 100%;
    padding: 4px 10px;
    border-radius: 5px;
  }
`;

const themes = {
  default: css`
    & + input {
      border: 1px solid #000;
    }
  `,
  primary: css`
    color: #1565c0;
    & + input {
      border: 1px solid #1565c0;
    }
  `,
  secondary: css`
    color: #999;
    & + input {
      border: 1px solid #999999;
    }
  `,
  error: css`
    color: red;
    & + input {
      border: 1px solid red;
    }
  `,
};

export default Input;
