import React from 'react';
import SelectBox from '../elements/SelectBox';
import TextAreaInput from '../elements/TextAreaInput';
import TextInput from '../elements/TextInput';
import FormHOC from '../elements/FormHOC';
import * as contactActions from '../../../../actions/contactActions.js';

class InputGroup extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const { handleChange, initialState } = this.props;

    return [
      <TextInput key="contact_email_input"
        autocomplete="off"
        name="email"
        onChange={handleChange}
        placeholder="Email"
        ref="email"
        type="text"
        value={initialState.email} />
    ];
  }
}
const callback = contactActions.insert,
  initialState = {
    email: ''
  },
  formId = 'loginForm',
  buttonTitle = "Log In"

//FormHOC requires 5 arguments - InputGroup, initialState, callback, formId, buttonTitle
// initialState is passed into the FormHOC
// initialState is passed back to InputGroup as the initialState propTypes
// InputGroup initialState prop value is set to FormHOC's this.state

const LoginInputGroup = FormHOC(InputGroup, initialState, callback, formId, buttonTitle);

export default LoginInputGroup;
