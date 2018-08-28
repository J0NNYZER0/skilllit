import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as messageActions from '../../../actions/messageActions.js';
import TextInput from './elements/TextInput';
import FormButton from './elements/Button';
import * as helpers from './helpers';

class SignupForm extends Component {

  defaultState() {
    return {
      values: {
        email: '',
        reason: '',
        comments: ''
      },
      validation: {
        email: [[helpers.isEmail, 'This is not an email'],[helpers.isRequired, 'This is required']],
        reason: [[helpers.isRequired, 'This is required']],
        comments: [[helpers.isMin, {min: 20}, 'This must be at least 20 characters'], [helpers.isRequired, 'This is required']]
      },
      errors: []
    }
  }

  constructor(props) {

    super(props);
    this.state = this.defaultState();

    this.handleOnChange = helpers.handleOnChange.bind(this);
    this.handleHasErrors = helpers.handleHasErrors.bind(this);
    this.toggleSubmitButton = helpers.toggleSubmitButton.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClearForm = helpers.handleClearForm.bind(this);
  }

  handleSubmit(e) {

    e.preventDefault();

    this.props.actions.insert({
        email: this.state.values.email,
        reason: this.state.values.reason,
        comments: this.state.values.comments
      })
    .then(() => {
      this.props.actions.succeeded(true);
      this.props.actions.message('Your message has been received');
    });

    this.handleClearForm();
  }

  render() {

    let button = {
      onClick: this.handleSubmit,
      title:'Continue'
    };

    return (
      <form className="form__login">
        <TextInput
          value={this.state.values.email}
          type="text"
          ref="email"
          name="email"
          placeholder="Email"
          onChange={this.handleOnChange}
          validate={this.state.validation.email}
          hasErrors={this.handleHasErrors} />
          <FormButton toggle={this.toggleSubmitButton} options={button} />
      </form>
    );
  }
}

SignupForm.propTypes = {

  actions: PropTypes.object.isRequired
};

const mapDispatchToProps = (dispatch) => {

  return {
    actions: bindActionCreators(messageActions, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(SignupForm);
