import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import ContactForm from '../common/forms/Contact';

class Contact extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const { contact } = this.props;

    return (
      <section className="contact">
        <h1>Contact</h1>
        <ContactForm contact={contact} />
      </section>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    contact: state.contact
  };
}

export default connect(mapStateToProps)(Contact);
