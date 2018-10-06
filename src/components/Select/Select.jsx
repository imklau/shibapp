import React from 'react';
import {
  arrayOf,
  object,
  string,
} from 'prop-types';

import './Select.css';

class Select extends React.Component {
  constructor(props) {
    super(props);
    const { head } = this.props;

    this.state = {
      isOpen: false,
      select: head,
    };
  }

  handleSelection(e) {
    const { value } = e.target;

    this.setState({
      select: value,
      isOpen: false,
    });
  }

  render() {
    const { isOpen, select } = this.state;
    const { options } = this.props;

    return (
      <div className={`select ${isOpen ? 'select--visible' : ''}`}>
        <button
          type="button"
          className="select__heading"
          onClick={() => this.setState(prevState => ({ isOpen: !prevState.isOpen }))}
        >
          {select}
        </button>

        <div className="select__options">
          { options.map(option => (
            <button
              key={option.id}
              className="select__option"
              onClick={this.handleSelection.bind(this)}
              value={option.name}
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
  head: string.isRequired,
};

export default Select;
