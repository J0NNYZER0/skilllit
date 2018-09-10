import React from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import HiddenInput from '../../../common/forms/elements/HiddenInput';
import TextInput from '../../../common/forms/elements/TextInput';
import FormButton from '../../../common/forms/elements/Button';
import * as profileActions from '../../../../actions/profileActions.js';

const formId = 'skillForm';

class SkillForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      skill: props.skill
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleCancelEdit = this.handleCancelEdit.bind(this);
  }

  handleChange(value) {
    const newState =  {...this.state};

    this.setState({ ...newState, ...value });
  }

  handleClick(e) {
    const { idx, callback } = this.props;

    e.preventDefault();

    let elements = [...document.getElementById(formId + '_' + idx).elements],
      data = {};

    for (let i = 0; i < elements.length - 1; i++)
      data[elements[i].name] = elements[i].value;

    callback.skillUpsert(data);

    this.handleCancelEdit()
  }

  handleCancelEdit() {
    const { cancelEditCb } = this.props;

    cancelEditCb()
  }

  render() {

    const { idx, cancelEditCb, experience_id } = this.props,
      { skill } = this.state;

    return (
      <form key={idx} id={formId + '_' + idx} className="skill_form">
        <HiddenInput name="id" value={skill.id} />
        <TextInput autocomplete="off"
          name="skill"
          onChange={this.handleChange}
          placeholder="Skill"
          ref="skill"
          type="text"
          value={skill.description} />
        <HiddenInput name="experience_id" value={experience_id} />
        <div className="buttons">
          <FormButton
            callback={this.handleClick}
            buttonTitle="Update" />
          <FormButton
            callback={this.handleCancelEdit}
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

export default connect(mapStateToProps, mapDispatchToProps)(SkillForm);
