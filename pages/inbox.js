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
      <Input
        id='primaryinput'
        theme='primary'
        label='primary input'
        value={input}
        fullWidth
        onChange={handleChange}
      />
      <Input
        id='errorinput'
        theme='error'
        label='error input'
        value={input}
        fullWidth
        onChange={handleChange}
      />
      <InputGroup>
        <Input id='1' label='default input' value={input} width='50%' onChange={handleChange} />
        <Input
          id='2'
          theme='secondary'
          label='secondary input'
          value={input}
          width='50%'
          onChange={handleChange}
        />
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
