import React from 'react';
import { string, number } from 'prop-types';

import './Input.css';

class Input extends React.Component {
  constructor(props) {
    super(props);
    const { min, max, type } = this.props;
    this.state = {
      value: type === 'number' ? min : '',
      min,
      max,
    };
  }

  handleChange(e) {
    const { value } = e.target;

    this.setState({
      value: parseInt(value, 10) || '',
    });
  }

  increment() {
    let { value } = this.state;
    const { max } = this.state;
    value = parseInt(value, 10) || max;

    this.setState({
      value: value < max ? value + 1 : max,
    });
  }

  decrement() {
    const { value, min } = this.state;

    this.setState({
      value: value > min ? value - 1 : min,
    });
  }

  render() {
    const {
      type,
      size,
      min,
      max,
    } = this.props;
    const { value } = this.state;

    return (
      <div className="input-wrapper">
        {type === 'number'
        && <button className="input-button" onClick={this.decrement.bind(this)}>-</button>
        }
        <input
          type={type}
          className={`input input--${size}`}
          min={min}
          max={max}
          value={value}
          onInput={this.handleChange.bind(this)}
        />
        <p className="input-error">{`The value should be a number between ${min} and ${max}`}</p>
        {type === 'number'
        && <button className="input-button" onClick={this.increment.bind(this)}>+</button>
        }
      </div>
    );
  }
}

Input.propTypes = {
  type: string,
  size: string,
  min: number,
  max: number,
};

Input.defaultProps = {
  type: 'text',
  size: 'regular',
  min: 1,
  max: 10,
};

export default Input;
