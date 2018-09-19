import React from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import JobSummary from './Summary';
import JobForm from '../forms/profile/Job';
import DetailEdit from './DetailEdit';
import * as profileActions from '../../../actions/profileActions';

class Edit extends React.Component {

  constructor(props) {

    super(props)
    this.state = {
      edit: -1
    }
    this.toggleEdit = this.toggleEdit.bind(this);
  }

  toggleEdit(idx) {
    let newState = { ...this.state };
    this.setState({...newState, edit: this.state.edit === idx ? -1 : idx });
  }

  render() {
    const { idx, experience, actions } = this.props,
      { edit } = this.state,
      editMode = idx === edit;

    return (
      <div className="job">
        {!editMode ?
          <JobSummary idx={idx} experience={experience} callback={this.toggleEdit} editMode={true} actions={actions} /> :
          <JobForm key={'job_form' + idx} toggle={this.toggle} idx={idx} experience={experience} toggle={this.toggleEdit} />}
        {!editMode && <DetailEdit key={'profile_job_detail' + idx} idx={idx} experience={experience} actions={actions} />}
      </div>
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
    actions: bindActionCreators(profileActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
