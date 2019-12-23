/** @jsx jsx */
import { jsx, css } from '@emotion/core';

function Checkbox({ id, theme, label, checked, onChange }) {
  return (
    <div css={[checkbox, themes[theme]]}>
      <input type='checkbox' id={id} checked={checked} onChange={onChange} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}

Checkbox.defaultProps = {
  theme: 'primary',
};

const checkbox = css`
  margin: 10px 0;
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
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 5px;
    margin-right: 5px;
  }

  input:checked + label::before {
    content: '✔';
  }
`;

const themes = {
  primary: css`
    input + label::before {
      content: '';
      color: #fafafa;
      background: #eeeeee;
    }

    input:checked + label::before {
      background: #1565c0;
    }
  `,
  secondary: css`
    input + label::before {
      content: '';
      color: #0d47a1;
      background: #fafafa;
    }

    input:checked + label::before {
      background: #eeeeee;
    }
  `,
};
export default Checkbox;
