import React from 'react';
import LoadMore from '../LoadMore';
import ItemMenuIcon from '../ItemMenuIcon';

class JobDetail extends React.Component {

  constructor(props) {

    super(props)
  }

  render() {
    const { idx, experience } = this.props,
      {id, from, to, title, company, city, state, projects, skills } = experience;

    return (
      <div className="job_details">
        {<LoadMore idx={idx} title="projects" list={projects} experience_id={id} />}
        {<LoadMore idx={idx} title="skills" list={skills} experience_id={id} />}
      </div>
    );
  }
}

export default JobDetail;
