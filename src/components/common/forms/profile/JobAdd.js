import React from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import HiddenInput from '../elements/HiddenInput';
import TextInput from '../elements/TextInput';
import FormButton from '../elements/Button';
import * as profileActions from '../../../../actions/profileActions.js';

const formId = 'jobAddForm';

class JobForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      from: 'a',
      to: 'a',
      title: 'a',
      company: 'a',
      city: 'a',
      state: 'a',
      account_id: '1'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleChange(value) {
    const { experience } = this.state;

    this.setState({ ...experience, ...value });
    console.log('this.state', this.state)
  }

  handleClick() {
    const { idx, callback, toggle } = this.props;

    let elements = [...document.getElementById(formId).elements],
      data = {};

    for (let i = 0; i < elements.length - 2; i++)
      data[elements[i].name] = elements[i].value;

    callback.experienceUpsert(data);

    toggle();
  }

  handleCancel() {
    const { toggle } = this.props;

    toggle()
  }

  render() {

    return (
      <form id={formId} className="job_form">
        <HiddenInput name="id" value={this.state.id} />
        <TextInput autocomplete="off"
          name="from"
          onChange={this.handleChange}
          placeholder="From"
          ref="from"
          type="text"
          value={this.state.from}
          label_name="from" />
        <TextInput autocomplete="off"
          name="to"
          onChange={this.handleChange}
          placeholder="To"
          ref="to"
          type="text"
          value={this.state.to}
          label_name="to" />
        <TextInput autocomplete="off"
          name="title"
          onChange={this.handleChange}
          placeholder="Title"
          ref="title"
          type="text"
          value={this.state.title}
          label_name="title" />
        <TextInput autocomplete="off"
          name="company"
          onChange={this.handleChange}
          placeholder="Company"
          ref="company"
          type="text"
          value={this.state.company}
          label_name="company" />
        <TextInput autocomplete="off"
          name="city"
          onChange={this.handleChange}
          placeholder="City"
          ref="city"
          type="text"
          value={this.state.city}
          label_name="city" />
        <TextInput autocomplete="off"
          name="state"
          onChange={this.handleChange}
          placeholder="State"
          ref="state"
          type="text"
          value={this.state.state}
          label_name="state" />
        <HiddenInput name="account_id" value={this.state.account_id} />
        <div className="buttons">
          <FormButton
            callback={this.handleClick}
            buttonTitle="Add" />
          <FormButton
            callback={this.handleCancel}
            buttonTitle="Cancel" />
        </div>
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
    callback: bindActionCreators(profileActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(JobForm);
