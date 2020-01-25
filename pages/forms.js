import React, { useState, useCallback } from 'react';

import StarRating from '../components/common/StarRating';
import TextEditor from '../components/common/TextEditor';
import Radio from '../components/common/Inputs/Radio';
import Select from '../components/common/Inputs/Select';
import Checkbox from '../components/common/Inputs/Checkbox';
import TextInput from '../components/common/Inputs/TextInput';
import InputGroup from '../components/common/Inputs/InputGroup';

const options = ['one', 'two', 'three'];

function inbox() {
  const [input, setInput] = useState('');
  const [checkbox, setCheckbox] = useState({
    primaryCheckbox: true,
    secondaryCheckbox: true,
    errorCheckbox: true,
  });
  const [radioChecked, setRadioChecked] = useState('primary');
  const [select, setSelect] = useState({
    defaultSelect: 'one',
    primarySelect: 'one',
    secondarySelect: 'two',
    errorSelect: 'three',
  });
  const [nativeSelect, setNativeSelect] = useState({
    defaultNative: 'one',
    primaryNative: 'one',
    secondaryNative: 'two',
    errorNative: 'three',
  });
  const [star, setStar] = useState(0);
  const [readOnlyStar, setReadOnlyStar] = useState(5);

  const handleChange = useCallback(
    ({ target }) => {
      setInput(target.value);
    },
    [input]
  );

  const handleCheckboxChange = useCallback(({ target }) => {
    const { id } = target;
    setCheckbox(prev => ({
      ...checkbox,
      [id]: !prev[id],
    }));
  });

  const handleRadioChange = useCallback(({ target }) => {
    setRadioChecked(target.id);
  });

  const handleSelectChange = useCallback(
    ({ target }) => {
      const id = target.id || target.dataset.id;
      const value = target.value || target.innerText;

      setSelect({
        ...select,
        [id]: value,
      });
    },
    [select]
  );

  const handleNativeSelectChange = useCallback(
    ({ target }) => {
      setNativeSelect({
        ...nativeSelect,
        [target.id]: target.value,
      });
    },
    [nativeSelect]
  );

  return (
    <form>
      <InputGroup>
        <TextInput
          id="primaryinput"
          theme="primary"
          label="primary input"
          value={input}
          fullWidth
          onChange={handleChange}
        />
      </InputGroup>
      <InputGroup>
        <TextInput
          id="errorinput"
          theme="error"
          label="error input"
          value={input}
          fullWidth
          onChange={handleChange}
        />
      </InputGroup>
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
          id="primaryCheckbox"
          label="primary checkbox"
          checked={checkbox.primaryCheckbox}
          onChange={handleCheckboxChange}
          theme="primary"
        />
        <Checkbox
          id="secondaryCheckbox"
          label="secondary checkbox"
          checked={checkbox.secondaryCheckbox}
          onChange={handleCheckboxChange}
          theme="secondary"
        />
        <Checkbox
          id="errorCheckbox"
          label="error checkbox"
          checked={checkbox.errorCheckbox}
          onChange={handleCheckboxChange}
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
          id="defaultSelect"
          value={select.defaultSelect}
          onChange={handleSelectChange}
          // theme="default"
          options={options}
        />
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
      <InputGroup>
        <Select
          native
          id="defaultNative"
          value={nativeSelect.defaultNative}
          onChange={handleNativeSelectChange}
          options={options}
        />
        <Select
          native
          id="primaryNative"
          value={nativeSelect.primaryNative}
          onChange={handleNativeSelectChange}
          theme="primary"
          options={options}
        />
        <Select
          native
          id="secondaryNative"
          value={nativeSelect.secondaryNative}
          onChange={handleNativeSelectChange}
          theme="secondary"
          options={options}
        />
        <Select
          native
          id="errorNative"
          value={nativeSelect.errorNative}
          onChange={handleNativeSelectChange}
          theme="error"
          options={options}
        />
      </InputGroup>
      <StarRating star={star} setStar={setStar} />
      <StarRating star={readOnlyStar} setStar={setReadOnlyStar} readOnly />
      <TextEditor />
    </form>
  );
}

export default inbox;
