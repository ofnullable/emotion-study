/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import media from '../../../styles/media';

function InputGroup({ horizontal, rightAlign, gutter, children }) {
  return <div css={[groupStyle, margin(horizontal, gutter), align(rightAlign)]}>{children}</div>;
}

InputGroup.defaultProps = {
  horizontal: true,
  rightAlign: false,
  gutter: '16px',
};

const groupStyle = css`
  margin-bottom: 1rem;
  ${media.down('md')} {
    overflow: auto;
  }
`;

const margin = (horizontal, gutter) => {
  const flexDirection = horizontal ? `flex-direction: row` : `flex-direction: column`;
  const marginDirection = horizontal ? `margin-left: ${gutter}` : `margin-top: ${gutter}`;
  return css`
    display: flex;
    ${flexDirection};
    div + div {
      ${marginDirection};
    }
  `;
};

const align = rightAlign =>
  rightAlign
    ? css`
        display: flex;
        justify-content: flex-end;
      `
    : css``;

export default InputGroup;
