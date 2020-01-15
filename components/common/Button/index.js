/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { colors } from '../../../styles/colors';

function Button({ theme, disabled, iconOnly, children, ...rest }) {
  return (
    <button css={[button, themes[theme], iconOnlyStyle(iconOnly)]} disabled={disabled} {...rest}>
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
  border-radius: 4px;
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
  link: css`
    color: ${colors.primary[5]};
    background: ${colors.gray[0]};
    &:hover {
      color: ${colors.primary[6]};
      background: ${colors.gray[1]};
    }
    &:disabled {
      color: ${colors.primary[3]};
      background: ${colors.gray[0]};
    }
  `,
};

const iconOnlyStyle = iconOnly =>
  iconOnly
    ? css`
        padding: 0;
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        svg {
          margin: 0;
        }
      `
    : css``;

export default Button;
