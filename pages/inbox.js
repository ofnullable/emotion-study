import React, { useState, useCallback } from 'react';

import Radio from '../components/common/Inputs/Radio';
import TextEditor from '../components/common/TextEditor';
import Checkbox from '../components/common/Inputs/Checkbox';
import TextInput from '../components/common/Inputs/TextInput';
import InputGroup from '../components/common/Inputs/InputGroup';
import Select from '../components/common/Inputs/Select';

const options = ['one', 'two', 'three'];

function inbox() {
  const [input, setInput] = useState('');
  const [checked1, setChecked1] = useState(true);
  const [checked2, setChecked2] = useState(true);
  const [checked3, setChecked3] = useState(true);
  const [radioChecked, setRadioChecked] = useState('primary');
  const [select, setSelect] = useState({
    primarySelect: 'one',
    secondarySelect: 'two',
    errorSelect: 'three',
  });

  const handleChange = useCallback(
    ({ target }) => {
      setInput(target.value);
    },
    [input]
  );

  const handleRadioChange = useCallback(({ target }) => {
    setRadioChecked(target.id);
  });

  const handleSelectChange = useCallback(({ target }) => {
    setSelect({
      ...select,
      [target.id]: target.value,
    });
  });

  return (
    <form>
      <TextInput
        id="primaryinput"
        theme="primary"
        label="primary input"
        value={input}
        fullWidth
        onChange={handleChange}
      />
      <TextInput
        id="errorinput"
        theme="error"
        label="error input"
        value={input}
        fullWidth
        onChange={handleChange}
      />
      <InputGroup>
        <TextInput id="1" label="default input" value={input} width="50%" onChange={handleChange} />
        <TextInput
          id="2"
          theme="secondary"
          label="secondary input"
          value={input}
          width="50%"
          onChange={handleChange}
        />
      </InputGroup>
      <InputGroup>
        <Checkbox
          id="3"
          label="primary checkbox"
          checked={checked1}
          onChange={() => setChecked1(prev => !prev)}
          theme="primary"
        />
        <Checkbox
          id="4"
          label="secondary checkbox"
          checked={checked2}
          onChange={() => setChecked2(prev => !prev)}
          theme="secondary"
        />
        <Checkbox
          id="5"
          label="error checkbox"
          checked={checked3}
          onChange={() => setChecked3(prev => !prev)}
          theme="error"
        />
      </InputGroup>
      <InputGroup>
        <Radio
          id="primary"
          label="primary radio"
          checked={radioChecked === 'primary'}
          onChange={handleRadioChange}
          theme="primary"
          value="radio checked"
        />
        <Radio
          id="secondary"
          label="secondary radio"
          checked={radioChecked === 'secondary'}
          onChange={handleRadioChange}
          theme="secondary"
          value="radio unchecked"
        />
        <Radio
          id="error"
          label="error radio"
          checked={radioChecked === 'error'}
          onChange={handleRadioChange}
          theme="error"
          value="radio unchecked"
        />
      </InputGroup>
      <InputGroup>
        <Select
          id="primarySelect"
          value={select.primarySelect}
          onChange={handleSelectChange}
          theme="primary"
          options={options}
        />
        <Select
          id="secondarySelect"
          value={select.secondarySelect}
          onChange={handleSelectChange}
          theme="secondary"
          options={options}
        />
        <Select
          id="errorSelect"
          value={select.errorSelect}
          onChange={handleSelectChange}
          theme="error"
          options={options}
        />
      </InputGroup>
      <TextEditor />
    </form>
  );
}

export default inbox;
