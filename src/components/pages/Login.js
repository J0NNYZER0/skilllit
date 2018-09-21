import React from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import LoginForm from '../common/forms/login/InputGroup';
import * as accountActions from '../../actions/accountActions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: null
    }
  }

  componentWillMount() {
    const { history, match } = this.props;
    if (match.params.token) {
      history.push(`/me`)
    }
  }

  render() {

    return (
      <section>
        <h1>Log In</h1>
        <LoginForm />
      </section>
    );
  }
}

Login.propTypes = {
  site: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
  return {
    site: state.site,
    actions: PropTypes.object.isRequired
  };
},
mapDispatchToProps = dispatch => {

  return {
    actions: bindActionCreators(accountActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
