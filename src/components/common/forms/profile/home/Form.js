import React from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import TextInput from '../../elements/TextInput';
import FormButton from '../../elements/Button';
import * as actions from '../../../../../actions/accountActions.js';

const formId = 'homeForm',
  buttonTitle = 'Update';

class HomeForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = props.home

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(value) {
    const { home } = this.state,
      newState = { ...home, ...value };

    this.setState({ ...home, ...value })
    console.log('newState', this.state)
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

    const { handleChange, home } = this.props;

    return (
      <form id={formId} className="form__login">
        <TextInput key="contact_email_input"
          autocomplete="off"
          name="title"
          onChange={this.handleChange}
          placeholder="Title"
          ref="title"
          type="text"
          value={this.state.title} />
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
    callback: bindActionCreators(actions.login, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeForm);
