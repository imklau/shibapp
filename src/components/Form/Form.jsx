import React from 'react';

import Button from '../Button/Button';
import Input from '../Input/Input';
import Select from '../Select/Select';

import './Form.css';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      select: false,
      options: [
        { id: 1, name: 'shibes' },
        { id: 2, name: 'cats' },
        { id: 3, name: 'dog' },
        { id: 4, name: 'random' },
      ],
      min: 1,
      max: 10,
      inputNumber: 1,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleChange(inputNumber) {
    this.setState({
      inputNumber,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { select } = this.state;

    if (select) {
      console.log(this.state);
    }
  }

  handleSelect(select) {
    this.setState({
      select,
    });
  }

  render() {
    const {
      select,
      options,
      min,
      max,
      inputNumber,
    } = this.state;

    return (
      <form className="form" onSubmit={this.handleSubmit.bind(this)}>
        <header className="form__header">
          <h1 className="form__title">
            <span>Shibapp</span>

            <span role="img" aria-label="dog"> 🐶</span>
          </h1>

          <p className="form__subtitle">Let&apos;s find a cute picture!</p>
        </header>

        <div className="form__body">
          <Input
            type="number"
            min={min}
            max={max}
            inputNumber={inputNumber}
            handleChange={this.handleChange}
          />

          <Select
            header={select}
            options={options}
            handleSelect={this.handleSelect}
          />
        </div>

        <Button size="expanded">search</Button>
      </form>
    );
  }
}

export default Form;
