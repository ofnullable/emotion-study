import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

import { colors } from '../../../styles/colors';

function Select({ id, theme, value, options, onChange }) {
  return (
    <div css={[selectStyle, themes[theme]]}>
      <select id={id} onChange={onChange} value={value}>
        {options.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

Select.defaultProps = {
  theme: 'default',
};

const selectStyle = css`
  position: relative;
  display: inline-block;
  vertical-align: middle;
  border-radius: 4px;
  border: 2px solid;

  & > select {
    border: none;
    padding: 8px 12px;
    border-radius: 4px;
  }

  & > ul {
    top: 0;
    left: 0;
    margin: 0;
    padding: 0;
    z-index: 10;
    min-width: 100%;
    list-style: none;
    position: absolute;
    border-radius: 4px;
  }
`;

const themes = {
  default: css`
    border-color: ${colors.gray[6]};
    & select {
      color: ${colors.gray[7]};
    }
  `,
  primary: css`
    border-color: ${colors.primary[5]};
    & select {
      color: ${colors.primary[5]};
    }
  `,
  secondary: css`
    border-color: ${colors.secondary[5]};
    & select {
      color: ${colors.secondary[5]};
    }
  `,
  error: css`
    border-color: ${colors.error[3]};
    & select {
      color: ${colors.error[3]};
    }
  `,
};

export default Select;
