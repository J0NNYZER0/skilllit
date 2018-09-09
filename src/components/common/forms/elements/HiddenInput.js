import React from 'react';

const HiddenInput = ({name, value}) => {

  return (
    <input name={name} type="hidden" value={value} onChange={()=>{}} />
  )
}

export default HiddenInput;
