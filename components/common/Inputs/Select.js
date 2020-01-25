import React, { useState, useRef } from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { FaAngleDown } from 'react-icons/fa';

import media from '../../../styles/media';
import { colors } from '../../../styles/colors';

function Select({ id, theme, value, options, native, onChange }) {
  return (
    <div css={[selectStyle, themes[theme], conditionalStyle(native)]}>
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const setDisplayNode = useRef();

  const toggleVisible = () => {
    setOptionsVisible(prev => !prev);
  };

  const handleChange = e => {
    setDisplayNode.current.blur();
    onChange(e);
  };

  const getTarget = e => {
    return e.target.firstElementChild.childNodes[currentIndex];
  };

  const handleKeyDown = e => {
    const validKeys = ['ArrowUp', 'ArrowDown', 'Enter', 'Escape'];

    if (validKeys.includes(e.key)) {
      switch (e.key) {
        case 'ArrowUp':
          if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
          }
          return;
        case 'ArrowDown':
          if (currentIndex < options.length - 1) {
            setCurrentIndex(prev => prev + 1);
          }
          return;
        case 'Enter':
          e.target = getTarget(e);
          onChange(e);
          setDisplayNode.current.blur();
          return;
        case 'Escape':
          setDisplayNode.current.blur();
          return;
      }
    }
  };

  const handleHover = i => () => {
    setCurrentIndex(i);
  };

  return (
    <>
      <div
        css={[divSelectStyle]}
        tabIndex={0}
        onBlur={toggleVisible}
        onFocus={toggleVisible}
        onKeyDown={handleKeyDown}
        ref={setDisplayNode}
      >
        {value}
        <ul css={[optionsStyle(optionsVisible)]}>
          {options.map((option, i) => (
            <li
              data-id={id}
              key={option}
              onClick={handleChange}
              onMouseOver={handleHover(i)}
              css={[i === currentIndex ? activeOptionStyle : '']}
            >
              {option}
            </li>
          ))}
        </ul>
        <FaAngleDown />
      </div>

      <NativeSelect id={id} onChange={onChange} value={value} options={options} />
    </>
  );
}

function NativeSelect({ id, onChange, value, options }) {
  return (
    <>
      <select id={id} onChange={onChange} value={value} css={[nativeSelectStyle]}>
        {options.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <FaAngleDown />
    </>
  );
}

Select.defaultProps = {
  theme: 'default',
  native: false,
};

const themes = {
  default: css`
    color: ${colors.gray[7]};
    border-color: ${colors.gray[7]};
  `,
  primary: css`
    color: ${colors.primary[5]};
    border-color: ${colors.primary[5]};
  `,
  secondary: css`
    color: ${colors.secondary[5]};
    border-color: ${colors.secondary[5]};
  `,
  error: css`
    color: ${colors.error[3]};
    border-color: ${colors.error[3]};
  `,
};

const selectStyle = css`
  width: auto;
  min-width: 90px;
  border: 2px solid;
  border-radius: 4px;
  position: relative;
  display: inline-block;
  vertical-align: middle;
  & div,
  & select {
    padding: 8px 24px 8px 12px;
  }
`;

const conditionalStyle = native =>
  native
    ? null
    : css`
        ${media.up('md')} {
          & > div {
            display: inline-block;
          }
          & > select {
            display: none;
            & + svg {
              display: none;
            }
          }
        }

        ${media.down('sm')} {
          & > div {
            display: none;
          }
          & > select {
            display: inline-block;

            & + svg {
              display: inline-block;
            }
          }
        }
      `;

const nativeSelectStyle = css`
  z-index: 1;
  color: inherit;
  appearance: none;
  border: none;
  border-radius: 4px;
  position: relative;
  font-family: inherit;
  background: transparent;
  & + svg {
    z-index: 0;
    top: calc(50% - 8px);
    right: 8%;
    position: absolute;
  }
`;

const divSelectStyle = css`
  width: 100%;
  color: inherit;
  cursor: pointer;
  position: relative;
  border-radius: 4px;
  &:focus {
    outline: none;
  }
  & > ul {
    transition: opacity 0.1s ease, z-index 0.2s ease;
  }
  & > svg {
    z-index: 0;
    top: calc(50% - 8px);
    right: 8%;
    position: absolute;
  }
`;

const optionsStyle = visible => css`
  top: 100%;
  left: -2px;
  margin: 0;
  padding: 0;
  background: #fff;
  list-style: none;
  border: 2px solid;
  position: absolute;
  border-radius: 4px;
  width: calc(100% + 4px);
  opacity: ${visible ? 1 : 0};
  z-index: ${visible ? 10 : -1};

  & li {
    padding: 12px;
    cursor: pointer;
  }
`;

const activeOptionStyle = css`
  background: ${colors.gray[2]};
`;

export default Select;
