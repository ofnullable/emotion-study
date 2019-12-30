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
    }
    &::after {
      display: none;
    }
  }
  & input[type='radio']:checked + label::after {
    content: '';
    width: 0.6rem;
    height: 0.6rem;
    top: 0.25rem;
    left: 0.2rem;
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
};

export default Radio;
