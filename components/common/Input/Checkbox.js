/** @jsx jsx */
import { jsx, css } from '@emotion/core';

function Checkbox({ id, label, checked, onChange }) {
  return (
    <div css={[checkbox]}>
      <input type="checkbox" id={id} checked={checked} onChange={onChange} />
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
    display: inline-block;
    cursor: pointer;
  }

  input + label::before {
    content: '';
    color: #fafafa;
    display: inline-block;
    vertical-align: middle;
    width: 1.2rem;
    height: 1.2rem;
    background: #eeeeee;
    border-radius: 5px;
    margin-right: 5px;
  }

  input:checked + label::before {
    content: 'X';
    text-align: center;
    background: #1565c0;
  }
`;

export default Checkbox;
