import React, { useState, useCallback } from 'react';
import Input from '../components/common/Input/Input';
import InputGroup from '../components/common/Input/InputGroup';
import Checkbox from '../components/common/Input/Checkbox';

function inbox() {
  const [input, setInput] = useState('');
  const [checked, setChecked] = useState(false);

  const handleChange = useCallback(
    ({ target }) => {
      setInput(target.value);
    },
    [input]
  );

  const handleCheckboxChange = useCallback(() => {
    setChecked(prev => !prev);
  }, [input]);

  return (
    <>
      <Input id='something' label='test input' value={input} fullWidth onChange={handleChange} />
      <InputGroup horizontal={true}>
        <Input id='1' label='input1' value={input} width='50%' onChange={handleChange} />
        <Input id='2' label='input2' value={input} width='50%' onChange={handleChange} />
      </InputGroup>
      <Checkbox id='3' label='checkbox test' checked={checked} onChange={handleCheckboxChange} />
    </>
  );
}

export default inbox;
