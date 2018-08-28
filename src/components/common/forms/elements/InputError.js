import React from 'react';

const ValidationMessage = ({visible, errorMessage}) => {
        return (
          <div className={!visible ? 'validator__message' : 'validator__message--show'}>
            {errorMessage}
          </div>
        )
    }

export default ValidationMessage;
