import React from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import FormButton from './Button';

const FormHOC = (InputGroup, initialState, callback, formId, buttonTitle) => {
  class HOC extends React.Component {

    constructor(props) {
      super(props);
      this.state = { inputGroupState: initialState };

      this.handleChange = this.handleChange.bind(this);
      this.handleClick = this.handleClick.bind(this);
    }

    handleChange(value) {
      const { inputGroupState } = this.state,
        newInputGroupState = { ...inputGroupState },
        updatedInputGroupState = { ...newInputGroupState, ...value };

      this.setState({...this.state, inputGroupState: updatedInputGroupState})
    }

    handleClick(e) {
      const { callback } = this.props;

      e.preventDefault();

      let elements = [...document.getElementById(formId).elements],
        data = {}

      for (let i = 0; i < elements.length - 1; i++)
        data[elements[i].name] = elements[i].value

      callback(data)
      this.setState({
          inputGroupState: initialState,
      })
    }

    render() {
      const { inputGroupState } = this.state;

      return (
        <form id={formId} className="form__login">
          <InputGroup handleChange={this.handleChange} initialState={inputGroupState} />
          <FormButton
            callback={this.handleClick}
            buttonTitle={buttonTitle} />
        </form>
      );
    }
  }

  const mapStateToProps = state => {
    return {
      callback: PropTypes.object.isRequired
    };
  },
  mapDispatchToProps = dispatch => {

    return {
      callback: bindActionCreators(callback, dispatch)
    };
  }

  return connect(mapStateToProps, mapDispatchToProps)(HOC);

}

export default FormHOC;
