/** @jsx jsx */
import { jsx, css } from '@emotion/core';

function Checkbox({ id, label, checked, onChange }) {
  return (
    <div css={[checkbox]}>
      <input type='checkbox' id={id} checked={checked} onChange={onChange} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}

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
    color: #fafafa;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.2rem;
    height: 1.2rem;
    background: #eeeeee;
    border-radius: 5px;
    margin-right: 5px;
  }

  input:checked + label::before {
    content: '✔';
    background: #1565c0;
  }
`;

export default Checkbox;
