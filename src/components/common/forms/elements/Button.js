import React from 'react';

const Button = ({toggle, options}) => {
  return (
    <button disabled={!toggle()} onClick={options.onClick} className="button">{options.title}</button>
  );
}

export default Button;
