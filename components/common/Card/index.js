import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { colors } from '../../../style/colors';

const Card = ({ children }) => {
  return <div css={[cardWrapperStyle]}>{children}</div>;
};

const cardWrapperStyle = css`
  width: 32%;
  margin-top: 1%;
  margin-left: 1%;
  padding: 16px;
  border: 1px solid ${colors.gray[1]};
  border-radius: 4px;
  display: inline-block;
  vertical-align: top;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14),
    0px 1px 3px 0px rgba(0, 0, 0, 0.12);
`;

export default Card;
