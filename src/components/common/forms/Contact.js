import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as contactActions from '../../../actions/contactActions.js';
import SelectBox from './elements/SelectBox';
import TextAreaInput from './elements/TextAreaInput';
import TextInput from './elements/TextInput';
import FormButton from './elements/Button';

class ContactForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      formId: "contact"
    }
  }


  render() {

    return (
      <form id={this.state.formId} className="form__login">
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
          <FormButton callback={this.props.actions.insert} formId={this.state.formId} title={'Send me a message'} />
      </form>
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
