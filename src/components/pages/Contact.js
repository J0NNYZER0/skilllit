import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import ContactForm from '../common/forms/contact/InputGroup';

class Contact extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <section>
        <h1>Contact</h1>
        <ContactForm />
      </section>
    );
  }
}

Contact.propTypes = {
  site: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    site: state.site
  };
}

export default connect(mapStateToProps)(Contact);
