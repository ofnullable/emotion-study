import React, { useState, useCallback } from 'react';

import Input from '../components/common/Input/Input';
import InputGroup from '../components/common/Input/InputGroup';
import Checkbox from '../components/common/Input/Checkbox';
import TextEditor from '../components/common/TextEditor';

function inbox() {
  const [input, setInput] = useState('');
  const [checked1, setChecked1] = useState(true);
  const [checked2, setChecked2] = useState(true);

  const handleChange = useCallback(
    ({ target }) => {
      setInput(target.value);
    },
    [input]
  );

  return (
    <>
      <Input id='something' label='test input' value={input} fullWidth onChange={handleChange} />
      <InputGroup>
        <Input id='1' label='input1' value={input} width='50%' onChange={handleChange} />
        <Input id='2' label='input2' value={input} width='50%' onChange={handleChange} />
      </InputGroup>
      <InputGroup>
        <Checkbox
          id='3'
          label='primary checkbox'
          checked={checked1}
          onChange={() => setChecked1(prev => !prev)}
          theme='primary'
        />
        <Checkbox
          id='4'
          label='secondary checkbox'
          checked={checked2}
          onChange={() => setChecked2(prev => !prev)}
          theme='secondary'
        />
      </InputGroup>
      <TextEditor />
    </>
  );
}

export default inbox;
