import React from 'react';
import TextInput from '../../elements/TextInput';
import FormHOC from '../../elements/FormHOC';
import * as accountActions from '../../../../../actions/accountActions.js';

const _initialState = {}

class InputGroup extends React.Component {

  constructor(props) {
    super(props);

    this.state = props.initialState ? props.initialState : _initialState
  }

  render() {

    const { handleChange, initialState } = this.props;

    return [
      <TextInput key="contact_email_input"
        autocomplete="off"
        name="title"
        onChange={handleChange}
        placeholder="Title"
        ref="title"
        type="text"
        value={this.state.title} />
    ];
  }
}

const actions = accountActions.login,
  formId = 'homeForm',
  buttonTitle = 'Update'

//FormHOC requires 5 arguments - InputGroup, initialState, callback, formId, buttonTitle
// initialState is passed into the FormHOC
// initialState is passed back to InputGroup as the initialState propTypes
// InputGroup initialState prop value is set to FormHOC's this.state

const LoginInputGroup = FormHOC(InputGroup, _initialState, actions, formId, buttonTitle);

export default LoginInputGroup;
