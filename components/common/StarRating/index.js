import React, { useState } from 'react';

function StarRating({ rating, setRating, readOnly }) {
  const [score, setScore] = useState(parseInt(rating) || 0);
  const [selection, setSelection] = useState(0);

  const handleClick = ({ target }) => {
    const starId = target.getAttribute('star-id') || score;
    if (starId) {
      setScore(starId);
    }
  };

  const handleHover = ({ target }) => {
    if (!target) {
      setSelection(0);
      return;
    }
    const starId = target.getAttribute('star-id');
    if (starId) {
      setSelection(starId);
    }
  };

  return (
    <div onMouseOver={handleHover} onClick={handleClick} onMouseOut={() => handleHover({})}>
      {Array.from(Array(5)).map((v, i) => (
        <Star
          key={`star_${i + 1}`}
          starId={i + 1}
          marked={selection ? selection >= i + 1 : score >= i + 1}
        />
      ))}
    </div>
  );
}

function Star({ starId, marked }) {
  return (
    <span star-id={starId} style={{ color: '#ff9933', cursor: 'pointer' }} role="button">
      {marked ? '\u2605' : '\u2606'}
    </span>
  );
}

export default StarRating;
