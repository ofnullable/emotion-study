/** @jsx jsx */
import { jsx, css } from '@emotion/core';

function Button({ theme, disabled, children, ...rest }) {
  return (
    <button css={[button, palette[theme]]} disabled={disabled} {...rest}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  theme: 'primary',
};

const button = css`
  font-family: inherit;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  border: none;
  border-radius: 5px;
  padding: 8px 12px;
  outline: none;
  line-height: 1;

  &:disabled {
    cursor: not-allowed;
  }
`;

const palette = {
  primary: css`
    color: #fafafa;
    background: #1565c0;
    &:hover {
      background: #0d47a1;
    }
    &:disabled {
      color: #eeeeee;
      background: #0288d1;
    }
  `,
  secondary: css`
    color: #0d47a1;
    background: #fafafa;
    &:hover:enabled {
      background: #eeeeee;
    }
    &:disabled {
      color: #90caf9;
    }
  `,
};

export default Button;
