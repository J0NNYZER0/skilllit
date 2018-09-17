import React from 'react';
import JobSummary from './Summary';
import JobForm from '../forms/profile/Job';
import JobDetailEdit from './DetailEdit';

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
    const { idx, experience } = this.props,
      { edit } = this.state,
      editMode = idx === edit;

    return (
      <div className="job">
        {!editMode ?
          <JobSummary idx={idx} experience={experience} callback={this.toggleEdit} editMode={true} /> :
          <JobForm key={'job_form' + idx} toggle={this.toggle} idx={idx} experience={experience} toggle={this.toggleEdit} />}
        {!editMode && <JobDetailEdit key={'profile_job_detail' + idx} idx={idx} experience={experience} />}
      </div>
    );
  }
}

export default Job;
