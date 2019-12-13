/** @jsx jsx */
import { jsx, css } from '@emotion/core';

function ButtonGroup({ horizontal, position, gutter, children }) {
  return <div css={[margin(horizontal, gutter), align(position)]}>{children}</div>;
}

ButtonGroup.defaultProps = {
  horizontal: true,
  position: 'left',
  gutter: '15px',
};

const margin = (horizontal, gutter) => {
  const flexDirection = horizontal ? `flex-direction: row` : `flex-direction: column`;
  const margin = horizontal ? `margin-left: ${gutter}` : `margin-top: ${gutter}`;
  return css`
    display: flex;
    ${flexDirection};
    button + button {
      ${margin};
    }
  `;
};

const align = position => {
  switch (position) {
    case 'center':
      return css`
        display: flex;
        justify-content: center;
      `;
    case 'right':
      return css`
        display: flex;
        justify-content: flex-end;
      `;
    default:
      return css`
        display: flex;
      `;
  }
};

export default ButtonGroup;
