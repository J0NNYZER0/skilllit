import React from 'react';

const HiddenInput = ({id, value}) => {

  return (
    <div>
      <input
        id={id}
        type="hidden"
        value={value} />
    </div>
  )
}

export default HiddenInput;
