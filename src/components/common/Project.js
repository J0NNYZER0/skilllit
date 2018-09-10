import React from 'react';
import ItemMenuIcon from './ItemMenuIcon';
import ItemMenu from './ItemMenu';
import TextInput from './forms/elements/TextInput';
import ProjectForm from '../pages/profile/forms/Project';


class Project extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    const { idx, projects, show, experience_id } = this.props;

    return (
      <div id={'a_' + idx} className={show !== true ? 'projects' : 'projects show'}>
        <h4>Projects</h4>
        {projects.map((project, i) => <div key={i} className="project"><div>{project.description}</div></div>)}
      </div>
    );
  }
}

export default Project;
