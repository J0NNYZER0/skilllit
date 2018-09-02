import React from 'react';
import SelectBox from '../elements/SelectBox';
import TextAreaInput from '../elements/TextAreaInput';
import TextInput from '../elements/TextInput';
import formWrapper from '../elements/FormWrapper';
import * as contactActions from '../../../../actions/contactActions.js';

class InputGroup extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const { formState, handleChange } = this.props;

    return [
      <TextInput key="contact_email_input"
        autocomplete="off"
        name="email"
        onChange={handleChange}
        placeholder="Email"
        ref="email"
        type="text" />,
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
        selected={formState.reason} />,
      <TextAreaInput key="contact_comments_input"
        autocomplete="off"
        cols="50"
        name="comments"
        onChange={handleChange}
        placeholder="Comments"
        ref="comments"
        rows="3" />
    ];
  }
}

const ContactInputGroup = formWrapper(InputGroup, contactActions);

export default ContactInputGroup;
