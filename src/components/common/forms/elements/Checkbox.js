import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({options}) => {
  return (<div className="control control-checkbox">
      <input
        name={options.name}
        type="checkbox"
        checked={options.checked}
        onChange={options.handleShippingInputChange} />
      <div className="control_indicator" />
  </div>);
};

Checkbox.propTypes = {
  options: PropTypes.object.isRequired
};

export default Checkbox;
