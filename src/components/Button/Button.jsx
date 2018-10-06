import React from 'react';
import {
  oneOfType,
  bool,
  node,
  number,
  string,
} from 'prop-types';

import './Button.css';

const Button = ({
  children,
  loading,
  disabled,
  type,
  size,
}) => (
  <button
    disabled={disabled}
    type={type}
    loading={loading}
    className={`button button--${size} ${loading ? 'button--loading' : ''}`}
  >
    {loading ? 'loading' : children}
  </button>
);

Button.propTypes = {
  children: oneOfType([string, node, number]).isRequired,
  loading: bool,
  disabled: bool,
  type: string,
  size: string,
};

Button.defaultProps = {
  loading: false,
  disabled: false,
  type: 'submit',
  size: 'regular',
};

export default Button;
