import React from 'react';

import Button from '../Button';

/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { colors } from '../../../styles/colors';
import { MdSearch } from 'react-icons/md';

function Input({ id, theme, label, type, value, width, fullWidth, onChange }) {
  const isSearch = type === 'search';

  return (
    <div css={[inputStyle(width, fullWidth, isSearch), themes[theme]]}>
      <label htmlFor={id}>{label}</label>
      {type === 'search' && (
        <Button iconOnly theme={theme}>
          <MdSearch />
        </Button>
      )}
      <input id={id} type={type} value={value} onChange={onChange} />
    </div>
  );
}

Input.defaultProps = {
  type: 'text',
  theme: 'default',
};

const inputStyle = (width, fullWidth, isSearch) => css`
  width: ${fullWidth ? '100%' : width ? width : 'auto'};
  position: relative;

  label {
    display: block;
  }

  & > input {
    width: 100%;
    padding: ${isSearch ? '8px 12px 8px 38px' : '8px 12px'};
    border-radius: ${isSearch ? '4rem' : '4px'};
    &:focus {
      outline: none;
    }
  }

  ${isSearch &&
    css`
      & > button {
        position: absolute;
        left: 4px;
        bottom: 4px;
      }
    `}
`;

const themes = {
  default: css`
    & > label {
      color: ${colors.gray[6]};
    }
    & > input {
      border: 1px solid ${colors.gray[3]};
      &:focus {
        border-color: ${colors.gray[6]};
      }
    }
  `,
  primary: css`
    & > label {
      color: ${colors.primary[5]};
    }
    & > input {
      border: 1px solid ${colors.primary[5]};
    }
  `,
  secondary: css`
    & > label {
      color: ${colors.secondary[6]};
    }
    & > input {
      border: 1px solid ${colors.secondary[6]};
    }
  `,
  error: css`
    & > label {
      color: ${colors.error[4]};
    }

    & > input {
      border: 1px solid ${colors.error[4]};
    }
  `,
};

export default Input;
