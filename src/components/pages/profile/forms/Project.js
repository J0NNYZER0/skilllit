import React from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import HiddenInput from '../../../common/forms/elements/HiddenInput';
import TextInput from '../../../common/forms/elements/TextInput';
import FormButton from '../../../common/forms/elements/Button';
import * as profileActions from '../../../../actions/profileActions.js';

const formId = 'projectForm';

class ProjectForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = props.project;

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleCancelEdit = this.handleCancelEdit.bind(this);
  }

  handleChange(value) {
    const { project } = this.state;

    this.setState({ ...project, ...value });
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

    const { idx, cancelEditCb, experience_id } = this.props;

    return (
      <form key={idx} id={formId + '_' + idx}>
        <HiddenInput name="id" value={this.state.id} />
        <TextInput autocomplete="off"
          name="description"
          onChange={this.handleChange}
          placeholder="Project"
          ref="description"
          type="text"
          value={this.state.description} />
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
