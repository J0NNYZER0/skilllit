import React from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import HiddenInput from '../../elements/HiddenInput';
import TextInput from '../../elements/TextInput';
import FormButton from '../../elements/Button';
import * as profileActions from '../../../../../actions/profileActions.js';

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

    this.setState({ ...home, ...value });
  }

  handleClick(e) {
    const { callback } = this.props;

    console.log('callback', callback)

    e.preventDefault();

    let elements = [...document.getElementById(formId).elements],
      data = {};

    for (let i = 0; i < elements.length - 1; i++)
      data[elements[i].name] = elements[i].value;

    console.log('handleClick', data)

    callback.homeUpsert(data);

  }

  render() {

    const { handleChange, home } = this.props;

    return (
      <form id={formId} className="form__login">
        <TextInput key="profile_avatar_input"
          autocomplete="off"
          name="avatar"
          onChange={this.handleChange}
          placeholder="Avatar"
          ref="avatar"
          type="text"
          value={this.state.avatar} />
        <TextInput key="profile_selected_avatar_input"
          autocomplete="off"
          name="selected_avatar"
          onChange={this.handleChange}
          placeholder="Selected Avatar"
          ref="selected_avatar"
          type="text"
          value={this.state.selected_avatar} />
        <TextInput key="profile_talk_bubble_input"
          autocomplete="off"
          name="talk_bubble"
          onChange={this.handleChange}
          placeholder="Talk Bubble"
          ref="talk_bubble"
          type="text"
          value={this.state.talk_bubble} />
        <TextInput key="profile_title_input"
          autocomplete="off"
          name="title"
          onChange={this.handleChange}
          placeholder="Title"
          ref="title"
          type="text"
          value={this.state.title} />
        <TextInput key="profile_tagline_input"
          autocomplete="off"
          name="tagline"
          onChange={this.handleChange}
          placeholder="Tagline"
          ref="tagline"
          type="text"
          value={this.state.tagline} />
        <HiddenInput name="account_id" value={this.state.account_id} />
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
    callback: bindActionCreators(profileActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeForm);
