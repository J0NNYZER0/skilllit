import React from 'react';
import Project from './Project';
import Skill from './Skill';
import ItemMenuIcon from './ItemMenuIcon';

class JobDetail extends React.Component {

  constructor(props) {

    super(props)

    this.state = {
      detail: null
    }

    this.toggleDetail = this.toggleDetail.bind(this);
  }

  toggleDetail(detail) {
    if (detail !== this.state.detail)
      this.setState({ detail: detail });
    else this.setState({ detail: null })
  }

  render() {
    const { idx, experience } = this.props,
      {id, from, to, title, company, city, state, projects, skills } = experience;
    let showProject = this.state.detail === 'project',
      showSkill = this.state.detail === 'skill';

    return [
      <div key="job_detail_button_key" className="button_wrapper">
        <button className={showProject !== true ? 'button' : 'button selected'} onClick={() => this.toggleDetail('project')}>Projects</button>
        <button className={showSkill !== true ? 'button' : 'button selected'} onClick={() => this.toggleDetail('skill')}>Skills</button>
      </div>,
      <div key="job_detail_detail_key">
        {<Project show={showProject} idx={idx} projects={projects} experience_id={id} />}
        {<Skill show={showSkill} idx={idx} skills={skills} experience_id={id} />}
      </div>
    ];
  }
}

export default JobDetail;
