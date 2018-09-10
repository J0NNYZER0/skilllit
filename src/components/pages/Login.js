import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import LoginForm from '../common/forms/login/InputGroup';

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const { contact } = this.props;

    return (
      <section>
        <h1>Log In</h1>
        <LoginForm contact={contact} />
      </section>
    );
  }
}

Login.propTypes = {
  contact: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    contact: state.contact
  };
}

export default connect(mapStateToProps)(Login);
