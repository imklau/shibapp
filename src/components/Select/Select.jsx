import React from 'react';
import {
  oneOfType,
  arrayOf,
  object,
  string,
  func,
  bool,
} from 'prop-types';

import './Select.css';

class Select extends React.Component {
  constructor() {
    super();

    this.state = {
      isOpen: false,
    };
  }

  selectOption(e) {
    const { handleSelect } = this.props;
    const { value } = e.target;

    this.setState({
      isOpen: false,
    });

    handleSelect(value);
  }

  render() {
    const { isOpen } = this.state;
    const { options, header } = this.props;

    return (
      <div className={`select ${isOpen ? 'select--visible' : ''}`}>
        <button
          type="button"
          className="select__heading"
          onClick={() => this.setState(prevState => ({ isOpen: !prevState.isOpen }))}
        >
          {header}
        </button>

        <div className="select__options">
          { options.map(option => (
            <button
              type="button"
              key={option.id}
              className="select__option"
              value={option.name}
              onClick={this.selectOption.bind(this)}
            >
              {option.name}
            </button>
          ))}
        </div>
      </div>
    );
  }
}

Select.propTypes = {
  options: arrayOf(object).isRequired,
  header: string.isRequired,
  handleSelect: oneOfType([func, bool]),
};

Select.defaultProps = {
  handleSelect: false,
};

export default Select;
