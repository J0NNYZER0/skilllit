import React from 'react';
import Project from './Project';
import JobSummary from './JobSummary';
import JobDetail from './JobDetail';

class Job extends React.Component {

  constructor(props) {

    super(props)
  }

  render() {
    const { idx, experience, toggleMenuCb } = this.props;

    return (
      <div id={"job_" + idx} className="job">
        <JobSummary idx={idx} experience={experience} />
        <JobDetail key={'profile_job_detail' + idx} idx={idx} experience={experience} />
      </div>
    );
  }
}

export default Job;
