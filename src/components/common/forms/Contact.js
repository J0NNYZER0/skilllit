import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as contactActions from '../../../actions/contactActions.js';
import Form from './elements/Form';
import SelectBox from './elements/SelectBox';
import TextAreaInput from './elements/TextAreaInput';
import TextInput from './elements/TextInput';

class ContactForm extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <Form formId="contact"
        callback={this.props.actions.insert}
        buttonTitle="Send me a message">
        <TextInput
          autocomplete="off"
          name="email"
          placeholder="Email"
          ref="email"
          type="text" />
        <SelectBox
          name="reason"
          options={[
            {name: 'Support', value: 1},
            {name: 'Login Issues', value: 2},
            {name: 'Compliments', value: 3},
            {name: 'Something Else', value: 4}
          ]}
          placeholder="Reason"
          ref="reason" />
        <TextAreaInput
          autocomplete="off"
          cols="50"
          name="comments"
          placeholder="Comments"
          ref="comments"
          rows="3" />
      </Form>
    );
  }
}

ContactForm.propTypes = {

  actions: PropTypes.object.isRequired
};

const mapDispatchToProps = (dispatch) => {

  return {
    actions: bindActionCreators(contactActions, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(ContactForm);
