/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { colors } from '../../../style/colors';

function Radio({ id, label, theme, value, checked, onChange }) {
  return (
    <div css={[radioStyle, themes[theme]]}>
      <input type='radio' id={id} value={value} checked={checked} onChange={onChange} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}

Radio.defaultProps = {
  theme: 'primary',
};

const radioStyle = css`
  position: relative;
  & input[type='radio'] {
    display: none;
  }
  & label {
    display: inline-block;
    vertical-align: middle;
    &::before {
      content: '';
      width: 1rem;
      height: 1rem;
      display: inline-block;
      vertical-align: middle;
      background: ${colors.gray[1]};
      border-radius: 50%;
      margin-right: 4px;
    }
    &::after {
      display: none;
    }
  }
  & input[type='radio']:checked + label::after {
    content: '';
    width: 0.5rem;
    height: 0.5rem;
    top: 0.3rem;
    left: 0.25rem;
    border-radius: 50%;
    position: absolute;
    display: inline-block;
  }
`;

const themes = {
  primary: css`
    & input[type='radio']:checked + label::after {
      background: ${colors.primary[5]};
    }
  `,
  secondary: css`
    & input[type='radio']:checked + label::after {
      background: ${colors.secondary[5]};
    }
  `,
  error: css`
    & input[type='radio']:checked + label::after {
      background: ${colors.error[4]};
    }
  `,
};

export default Radio;
