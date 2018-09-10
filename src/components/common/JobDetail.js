import React from 'react';
import Project from './Project';
import Skill from './Skill';
import ItemMenuIcon from './ItemMenuIcon';

class JobDetail extends React.Component {

  constructor(props) {

    super(props)

    this.state = {
      detail: 'project'
    }

    this.toggleDetail = this.toggleDetail.bind(this);
  }

  toggleDetail(detail) {

    this.setState({ detail: this.state.detail !== detail ? detail : 'project' });
  }

  render() {
    const { detail } = this.state, { idx, experience } = this.props,
      {id, from, to, title, company, city, state, projects, skills } = experience,
      showProject = detail === 'project',
      showSkill = detail === 'skill';

    return [
      <div key="job_detail_button_" className="buttons">
        <button className={!showProject ? 'button' : 'button selected'} onClick={() => this.toggleDetail('project')}>Projects</button>
        <button className={!showSkill ? 'button' : 'button selected'} onClick={() => this.toggleDetail('skill')}>Skills</button>
      </div>,
      <div key="job_detail_" className="job_details">
        {<Project show={showProject} idx={idx} projects={projects} experience_id={id} />}
        {<Skill show={showSkill} idx={idx} skills={skills} experience_id={id} />}
      </div>
    ];
  }
}

export default JobDetail;