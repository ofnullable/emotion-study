/** @jsx jsx */
import { jsx, css } from '@emotion/core';

function InputGroup({ horizontal, rightAlign, gutter, children }) {
  return <div css={[margin(horizontal, gutter), align(rightAlign)]}>{children}</div>;
}

InputGroup.defaultProps = {
  horizontal: true,
  rightAlign: false,
  gutter: '15px',
};

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
