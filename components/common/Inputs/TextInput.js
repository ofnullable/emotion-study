import React from 'react';

import Button from '../Button';

/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { colors } from '../../../styles/colors';
import { MdSearch } from 'react-icons/md';

function Input({ id, theme, label, type, value, width, fullWidth, onChange }) {
  return (
    <div css={[type === 'search' ? searchStyle : inputStyle(width, fullWidth), themes[theme]]}>
      {type === 'search' ? (
        <Button iconOnly theme={theme}>
          <MdSearch />
        </Button>
      ) : (
        <label htmlFor={id}>{label}</label>
      )}
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
    padding: 8px 12px;
    border-radius: 4px;
    &:focus {
      outline: none;
    }
  }
`;

const searchStyle = css`
  position: relative;

  label {
    display: block;
  }

  & > input {
    width: 100%;
    padding: 8px 12px 8px 36px;
    border-radius: 4px;
    &:focus {
      outline: none;
    }
  }
  & > button {
    position: absolute;
    top: 4px;
    left: 2px;
  }
`;

const themes = {
  default: css`
    & > input {
      border: 1px solid ${colors.gray[9]};
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
      color: ${colors.secondary[5]};
    }
    & > input {
      border: 1px solid ${colors.secondary[5]};
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
