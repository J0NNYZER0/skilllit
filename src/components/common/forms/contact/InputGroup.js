import React from 'react';
import SelectBox from '../elements/SelectBox';
import TextAreaInput from '../elements/TextAreaInput';
import TextInput from '../elements/TextInput';
import FormHOC from '../elements/FormHOC';
import * as contactActions from '../../../../actions/contactActions.js';
const initialState = {
  email: '',
  reason: '',
  comments: ''
}
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
        value={initialState.email} />,
      <SelectBox key="contact_reason_input"
        name="reason"
        onChange={handleChange}
        options={[
          {name: 'Support', value: 1},
          {name: 'Login Issues', value: 2},
          {name: 'Compliments', value: 3},
          {name: 'Something Else', value: 4}
        ]}
        placeholder="Reason"
        ref="reason"
        selected={initialState.reason}
        value={initialState.reason} />,
      <TextAreaInput key="contact_comments_input"
        autocomplete="off"
        cols="50"
        name="comments"
        onChange={handleChange}
        placeholder="Comments"
        ref="comments"
        rows="3"
        value={initialState.comments} />
    ];
  }
}
const callback = contactActions.insert,
  formId = 'contactForm'

//FormHOC take 4 arguments - InputGroup, callback, intitialState, formId
// initialState is passed into the FormHOC
// initialState is passed back to InputGroup as the initialState propTypes
// InputGroup initialState prop value is set to FormHOC's this.state

const ContactInputGroup = FormHOC(initialState, InputGroup, callback, formId);

export default ContactInputGroup;
