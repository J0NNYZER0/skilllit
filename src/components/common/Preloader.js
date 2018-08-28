import React from 'react';
import PropTypes from 'prop-types';

class Preloader extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    //const { fetch } = this.props;
    if (this.props.fetch && this.props.fetch.waiting) {
      document.body.className = 'fix';
      return(
        <div className="modal__preloader">
          <div className="modal__spinner">
            <span className="preloader__image" />
          </div>
        </div>
      );
    } else {
      document.body.className = '';
      return null
    }
  }
}

Preloader.propTypes = {
  fetch: PropTypes.object.isRequired
};

export default Preloader;
