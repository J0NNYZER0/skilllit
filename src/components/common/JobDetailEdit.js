import React from 'react';
import ProjectEdit from './ProjectEdit';
import SkillEdit from './SkillEdit';
import ItemMenuIcon from './ItemMenuIcon';

class JobDetail extends React.Component {

  constructor(props) {

    super(props)
  }

  render() {
    const { idx, experience } = this.props,
      {id, from, to, title, company, city, state, projects, skills } = experience;

    return (
      <div className="job_details">
        {<ProjectEdit idx={idx} projects={projects} experience_id={id} />}
        {<SkillEdit idx={idx} skills={skills} experience_id={id} />}
      </div>
    );
  }
}

export default JobDetail;
