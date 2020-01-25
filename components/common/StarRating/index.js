import React, { useState } from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { colors } from '../../../styles/colors';

function StarRating({ star = 0, setStar, readOnly }) {
  if (star > 5) {
    throw Error('Star can not be greater than 5');
  }

  const [current, setCurrent] = useState(0);

  const handleClick = ({ target }) => {
    if (readOnly) {
      return;
    }
    const starId = target.getAttribute('star-id');
    if (starId) {
      setStar(starId);
    }
  };

  const handleHover = ({ target }) => {
    if (readOnly) {
      return;
    }
    const starId = target && target.getAttribute('star-id');
    if (!starId) {
      setCurrent(star);
      return;
    }
    if (starId) {
      setCurrent(starId);
    }
  };

  return (
    <div
      css={[starStyle, cursor(readOnly)]}
      onClick={handleClick}
      onMouseOver={handleHover}
      onMouseOut={() => handleHover({})}
    >
      {Array.from(Array(5)).map((v, i) => (
        <Star
          key={`star_${i + 1}`}
          starId={i + 1}
          marked={current ? current >= i + 1 : star >= i + 1}
        />
      ))}
    </div>
  );
}

function Star({ starId, marked }) {
  return (
    <span star-id={starId} role="button">
      {marked ? '\u2605' : '\u2606'}
    </span>
  );
}

const starStyle = css`
  display: inline-flex;
  align-items: center;
  margin-bottom: 1rem;
  span {
    display: inherit;
    font-size: 1.5rem;
    color: ${colors.warn[5]};
  }
`;

const cursor = readOnly =>
  readOnly
    ? css`
        span {
          cursor: default;
        }
      `
    : css`
        span {
          cursor: pointer;
        }
      `;

export default StarRating;
