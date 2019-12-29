/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const CardFooter = ({ align, children }) => {
  return <div css={cardFooterStyle(align)}>{children}</div>;
};

const cardFooterStyle = align => css`
  padding: 0;
  text-align: ${align || 'initial'};
`;

export default CardFooter;
