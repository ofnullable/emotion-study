/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { colors } from '../../../style/colors';

function Button({ theme, disabled, children, ...rest }) {
  return (
    <button css={[button, themes[theme]]} disabled={disabled} {...rest}>
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

const themes = {
  primary: css`
    color: ${colors.gray[0]};
    background: ${colors.primary[5]};
    &:hover {
      background: ${colors.primary[6]};
    }
    &:disabled {
      background: ${colors.primary[3]};
    }
  `,
  secondary: css`
    color: ${colors.gray[9]};
    background: ${colors.secondary[1]};
    &:hover:enabled {
      background: ${colors.secondary[3]};
    }
    &:disabled {
      color: ${colors.secondary[4]};
    }
  `,
  error: css`
    color: ${colors.gray[0]};
    background: ${colors.error[4]};
    &:hover {
      background: ${colors.error[6]};
    }
    &:disabled {
      background: ${colors.error[2]};
    }
  `,
};

export default Button;
