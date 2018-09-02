import React from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Form from './Form';
import FormButton from './Button';

const FormWrapper = (InputGroup, actions) => {
  class HOC extends React.Component {

    constructor(props) {
      super(props);

      this.state = {
        email: '',
        reason: '',
        comments: ''
      }

      this.handleChange = this.handleChange.bind(this);
    }

    handleChange(value) {

      this.setState({ ...this.state, ...value })
    }

    render() {
      const { actions, callback } = this.props,
        formId = "contactForm"

      return (
        <Form formId={formId}>
          <InputGroup handleChange={this.handleChange} formState={this.state} />
          <FormButton
            callback={actions.insert}
            buttonTitle="Send me a message"
            formId={formId} />
        </Form>
      );
    }
  }

  const mapStateToProps = state => {
    return {
      actions: PropTypes.object.isRequired
    };
  },
  mapDispatchToProps = dispatch => {

    return {
      actions: bindActionCreators(actions, dispatch)
    };
  }

  return connect(mapStateToProps, mapDispatchToProps)(HOC);

}

export default FormWrapper;
