import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import SigninForm from '../common/forms/Signin';

class Signup extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const { contact } = this.props;

    return (
      <section className="contact">
        <h1>Sign In</h1>
        <SigninForm contact={contact} />
      </section>
    );
  }
}

Signup.propTypes = {
  contact: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    contact: state.contact
  };
}

export default connect(mapStateToProps)(Signup);
