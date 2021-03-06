/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const CardContent = ({ children }) => {
  return <div css={[cardContentStyle]}>{children}</div>;
};

const cardContentStyle = css`
  padding: 16px 0;
  flex: 1 0 auto;
`;

export default CardContent;
