import React from 'react';
import {
  string,
  number,
  oneOfType,
  func,
  bool,
} from 'prop-types';

import Button from '../Button/Button';

import './Input.css';

const Input = ({
  type,
  size,
  min,
  max,
  inputNumber,
  handleChange,
}) => {
  const onInput = (e) => {
    const { value } = e.target;

    handleChange(parseInt(value, 10) || '');
  };

  const increment = () => {
    const value = parseInt(inputNumber, 10) || max;

    handleChange(value < max ? value + 1 : max);
  };

  const decrement = () => {
    handleChange(inputNumber > min ? inputNumber - 1 : min);
  };

  return (
    <div className="input-wrapper">
      {type === 'number' && (
        <Button
          type="button"
          variant="secondary"
          size="small"
          onClick={() => decrement()}
        >
          -
        </Button>
      )}

      <input
        type={type}
        className={`input input--${size}`}
        min={min}
        max={max}
        value={inputNumber}
        onInput={e => onInput(e)}
      />

      <p className="input-error">{`The value should be a number between ${min} and ${max}`}</p>

      {type === 'number' && (
        <Button
          type="button"
          variant="secondary"
          size="small"
          onClick={() => increment()}
        >
          +
        </Button>
      )}
    </div>
  );
};

Input.propTypes = {
  type: string,
  size: string,
  min: number,
  max: number,
  inputNumber: oneOfType([string, number]),
  handleChange: oneOfType([func, bool]),
};

Input.defaultProps = {
  type: 'text',
  size: 'regular',
  min: 1,
  max: 10,
  inputNumber: '',
  handleChange: false,
};

export default Input;
