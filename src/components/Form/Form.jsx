import React from 'react';
import { oneOfType, func, bool } from 'prop-types';

import Button from '../Button/Button';
import Input from '../Input/Input';
import Select from '../Select/Select';

import './Form.css';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      select: false,
      options: [
        {
          id: 1,
          name: 'shibes',
          returnType() { return this.name; },
        },
        {
          id: 2,
          name: 'cats',
          returnType() { return this.name; },
        },
        {
          id: 3,
          name: 'birds',
          returnType() { return this.name; },
        },
        {
          id: 4,
          name: 'random',
          returnType: () => {
            const { options } = this.state;
            const random = Math.floor(Math.random() * (options.length - 1) + 1);
            const option = options.find(element => element.id === random);

            return option.name;
          },
        },
      ],
      min: 1,
      max: 10,
      inputNumber: 1,
    };
  }

  handleChange = (inputNumber) => {
    this.setState({
      inputNumber,
    });
  }

  handleSubmit = (e) => {
    const { select, inputNumber } = this.state;
    const { handleSubmit } = this.props;

    e.preventDefault();

    if (select) {
      const corsAnywhere = 'https://cors-anywhere.herokuapp.com/';
      const apiUrl = `http://shibe.online/api/${select.returnType()}?count=${inputNumber}`;

      fetch(corsAnywhere + apiUrl)
        .then(res => res.json())
        .then(this.setState({ loading: true }))
        .then((json) => {
          handleSubmit(json);

          this.setState({ loading: false });
        });
    }
  }

  handleSelect = (select) => {
    this.setState({
      select,
    });
  }

  render() {
    const {
      loading,
      select,
      options,
      min,
      max,
      inputNumber,
    } = this.state;

    return (
      <form className="form" onSubmit={this.handleSubmit}>
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
            header={select.name}
            options={options}
            handleSelect={this.handleSelect}
          />
        </div>

        <Button size="expanded" loading={loading}>search</Button>
      </form>
    );
  }
}

Form.propTypes = {
  handleSubmit: oneOfType([func, bool]),
};

Form.defaultProps = {
  handleSubmit: false,
};

export default Form;
