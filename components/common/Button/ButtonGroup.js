/** @jsx jsx */
import { jsx, css } from '@emotion/core';

function ButtonGroup({ horizontal, position, gutter, children }) {
  return <div css={[defaultStyle, margin(horizontal, gutter), align(position)]}>{children}</div>;
}

ButtonGroup.defaultProps = {
  horizontal: true,
  position: 'left',
  gutter: '16px',
};

const defaultStyle = css`
  display: flex;
`;

const margin = (horizontal, gutter) => {
  const flexDirection = horizontal ? `flex-direction: row` : `flex-direction: column`;
  const margin = horizontal ? `margin-left: ${gutter}` : `margin-top: ${gutter}`;
  return css`
    margin-bottom: 1rem;
    ${flexDirection};
    button + button {
      ${margin};
    }
  `;
};

const align = position => {
  console.log(position);
  switch (position) {
    case 'center':
      return css`
        justify-content: center;
      `;
    case 'right':
      return css`
        justify-content: flex-end;
      `;
    default:
      return css``;
  }
};

export default ButtonGroup;
