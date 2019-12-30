import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { colors } from '../../../style/colors';

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
    border-radius: 4px;
    &:focus {
      outline: none;
    }
  }
`;

const themes = {
  default: css`
    & + input {
      border: 1px solid ${colors.gray[9]};
    }
  `,
  primary: css`
    color: ${colors.primary[5]};
    & + input {
      border: 1px solid ${colors.primary[5]};
    }
  `,
  secondary: css`
    color: ${colors.secondary[5]};
    & + input {
      border: 1px solid ${colors.secondary[5]};
    }
  `,
  error: css`
    color: ${colors.error[4]};
    & + input {
      border: 1px solid ${colors.error[4]};
    }
  `,
};

export default Input;
