import React from 'react';
import PropTypes from 'prop-types';

const Button = ({title, click}) => {
  return (
    <button onClick={click} className="button">{title}</button>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  click: PropTypes.func
};

export default Button;
