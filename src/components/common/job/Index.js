import React from 'react';
import JobSummary from './Summary';
import JobDetail from './Detail';

class Job extends React.Component {

  constructor(props) {

    super(props)
  }

  render() {
    const { idx, experience, toggleMenuCb } = this.props;

    return (
      <div className="job">
        <JobSummary idx={idx} experience={experience} editMode={false} />
        <JobDetail key={'profile_job_detail' + idx} idx={idx} experience={experience} />
      </div>
    );
  }
}

export default Job;
