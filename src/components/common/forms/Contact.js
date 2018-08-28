import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as messageActions from '../../../actions/messageActions.js';
import SelectBox from './elements/SelectBox';
import TextAreaInput from './elements/TextAreaInput';
import TextInput from './elements/TextInput';
import FormButton from './elements/Button';
import * as helpers from './helpers';

class ContactForm extends Component {

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
      title:'Send me a message'
    },
    selectOptions = [
      {name: 'My order/preorder', value: 1},
      {name: 'Shipping', value: 2},
      {name: 'Product', value: 3},
      {name: 'Compliment', value: 4},
      {name: 'Customer issue', value: 5},
      {name: 'Something else', value: 6}
    ];

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
        <SelectBox
          options={selectOptions}
          value={this.state.values.reason}
          ref="reason"
          name="reason"
          placeholder="Reason"
          callback={this.handleOnChange}
          validate={this.state.validation.reason}
          hasErrors={this.handleHasErrors} />
        <TextAreaInput
          value={this.state.values.comments}
          ref="comments"
          name="comments"
          placeholder="Comments"
          onChange={this.handleOnChange}
          validate={this.state.validation.comments}
          hasErrors={this.handleHasErrors} />
          <FormButton toggle={this.toggleSubmitButton} options={button} />

        {/*<ul className="form__section">
          <li className="form__section--left">
            <Link to="/login">Login</Link><span>{' or '}</span>
            <Link to="/forgot">Forgot</Link>
          </li>
          <li className="form__section--right">
            <FormButton toggle={this.toggleSubmitButton} options={button} />
          </li>
        </ul>*/}
      </form>
    );
  }
}

ContactForm.propTypes = {

  actions: PropTypes.object.isRequired
};

const mapDispatchToProps = (dispatch) => {

  return {
    actions: bindActionCreators(messageActions, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(ContactForm);
