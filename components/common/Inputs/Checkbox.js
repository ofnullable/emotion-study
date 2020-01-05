/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { colors } from '../../../styles/colors';

function Checkbox({ id, theme, label, checked, onChange }) {
  return (
    <div css={[checkbox, themes[theme]]}>
      <input type="checkbox" id={id} checked={checked} onChange={onChange} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}

Checkbox.defaultProps = {
  theme: 'primary',
};

const checkbox = css`
  input {
    display: none;
  }

  label {
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  input + label::before {
    content: '';
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1rem;
    height: 1rem;
    font-size: 0.8rem;
    border-radius: 4px;
    margin-right: 4px;
    background: ${colors.gray[0]};
  }

  input:checked + label::before {
    content: '✔';
  }
`;

const themes = {
  primary: css`
    input + label::before {
      color: ${colors.gray[0]};
    }

    input:checked + label::before {
      background: ${colors.primary[5]};
    }
  `,
  secondary: css`
    input + label::before {
      color: ${colors.primary[5]};
    }

    input:checked + label::before {
      background: ${colors.secondary[1]};
    }
  `,
  error: css`
    input + label::before {
      color: ${colors.gray[0]};
    }

    input:checked + label::before {
      background: ${colors.error[4]};
    }
  `,
};
export default Checkbox;
