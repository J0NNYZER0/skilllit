import React from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import HiddenInput from '../../../common/forms/elements/HiddenInput';
import TextInput from '../../../common/forms/elements/TextInput';
import FormButton from '../../../common/forms/elements/Button';
import * as profileActions from '../../../../actions/profileActions.js';

const formId = 'experienceForm';

class ProjectForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      project: props.project
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleCancelEdit = this.handleCancelEdit.bind(this);
  }

  handleChange(value) {
    console.log('value', value);
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

    callback.projectUpsert(data);

    this.handleCancelEdit()
  }

  handleCancelEdit() {
    const { cancelEditCb } = this.props;

    cancelEditCb()
  }

  render() {

    const { idx, cancelEditCb, experience_id } = this.props,
      { project } = this.state;

    return (
      <form key={idx} id={formId + '_' + idx}>
        <HiddenInput name="id" value={project.id} />
        <TextInput autocomplete="off"
          name="project"
          onChange={this.handleChange}
          placeholder="Project"
          ref="project"
          type="text"
          value={project.description} />
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

export default connect(mapStateToProps, mapDispatchToProps)(ProjectForm);
