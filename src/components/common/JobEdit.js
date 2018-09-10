import React from 'react';
import EditIcon from './EditIcon';
import JobSummary from './JobSummary';
import JobForm from '../pages/profile/forms/Job';
import JobDetailEdit from './JobDetailEdit';

class Job extends React.Component {

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
    const { idx, experience, toggleMenuCb } = this.props,
      { edit } = this.state,
      editMode = idx === edit;

    return (
      <div id={"job_" + idx} className="job">
        <EditIcon key="edit_icon" idx={idx} callback={this.toggleEdit} />
        {!editMode ?
          <JobSummary idx={idx} experience={experience} /> :
          <JobForm key={'job_form' + idx} toggle={this.toggle} idx={idx} experience={experience} />}
        {!editMode && <JobDetailEdit key={'profile_job_detail' + idx} idx={idx} experience={experience} />}
      </div>
    );
  }
}

export default Job;
