import React, { useState } from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

import { colors } from '../../../styles/colors';

function Select({ id, theme, value, options, native, onChange }) {
  return (
    <div css={[selectStyle, themes[theme]]}>
      {native ? (
        <NativeSelect id={id} onChange={onChange} value={value} options={options} />
      ) : (
        <DivSelect id={id} onChange={onChange} value={value} options={options} />
      )}
    </div>
  );
}

function DivSelect({ id, onChange, value, options }) {
  const [optionsVisible, setOptionsVisible] = useState(false);
  return (
    <>
      <div css={[divSelectStyle]}>{value}</div>
      {optionsVisible && (
        <ul>
          {options.map(option => (
            <li key={option}>{option}</li>
          ))}
        </ul>
      )}
    </>
  );
}

function NativeSelect({ id, onChange, value, options }) {
  return (
    <select id={id} onChange={onChange} value={value} css={[nativeSelectStyle]}>
      {options.map(option => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

Select.defaultProps = {
  theme: 'default',
  native: false,
};

const selectStyle = css`
  position: relative;
  display: inline-block;
  vertical-align: middle;
  border-radius: 4px;
  border: 2px solid;
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

const nativeSelectStyle = css`
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
`;

const divSelectStyle = css`
  position: relative;
  border-radius: 4px;
  min-width: 100px;
  padding: 8px 24px 8px 12px;

  &::after {
    width: 0;
    height: 0;
    top: calc(50% - 2px);
    right: 10%;
    border: solid transparent;
    content: ' ';
    position: absolute;
    pointer-events: none;
    border-top-color: #000000;
    border-width: 4px;
    margin-left: -4px;
  }
`;

export default Select;
