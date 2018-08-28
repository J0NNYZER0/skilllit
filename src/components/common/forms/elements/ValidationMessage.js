import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ValidationMessage extends Component {
    constructor(props) {
      super(props)
    }

    render() {
      const {errors} = this.props;
      if (errors)
        return (
          <div className={errors.length === 0 ? 'validator__message' : 'validator__message--show'}>
            <ul>
              {errors.map((e,i) => {
                return <li key={i}>{e}</li>}
              )}
            </ul>
          </div>
        )
      else return null
    }
}

ValidationMessage.propTypes = {
  errors: PropTypes.array
};

export default ValidationMessage;
