import React from 'react';
import {
  oneOfType,
  bool,
  node,
  number,
  string,
  func,
} from 'prop-types';

import './Button.css';

const Button = ({
  children,
  type,
  variant,
  loading,
  disabled,
  size,
  onClick,
}) => (
  <button
    type={type}
    loading={loading}
    disabled={disabled}
    onClick={onClick || null}
    className={`button button--${variant} button--${size} ${loading ? 'button--loading' : ''}`}
  >
    {loading ? 'loading' : children}
  </button>
);

Button.propTypes = {
  children: oneOfType([string, node, number]).isRequired,
  type: string,
  variant: string,
  loading: bool,
  disabled: bool,
  size: string,
  onClick: oneOfType([func, bool]),
};

Button.defaultProps = {
  type: 'submit',
  variant: 'primary',
  loading: false,
  disabled: false,
  size: 'regular',
  onClick: false,
};

export default Button;
