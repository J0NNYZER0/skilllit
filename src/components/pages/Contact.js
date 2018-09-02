import React from 'react';
import PropTypes from 'prop-types';
import ContactForm from '../common/forms/contact/InputGroup';

class Contact extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <section className="contact">
        <h1>Contact</h1>
        <ContactForm />
      </section>
    );
  }
}

export default Contact;
