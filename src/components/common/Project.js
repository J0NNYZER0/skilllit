import React from 'react';
import ItemMenuIcon from './ItemMenuIcon';
import ItemMenu from './ItemMenu';

class Project extends React.Component {

  constructor(props) {

    super(props)

    this.toggleMenu = this.toggleMenu.bind(this)
  }

  toggleMenu() {

  }

  render() {
    const { idx, projects } = this.props;

    return (
      <ul id={'a_' + idx} className="projects">
        {projects.map((project, i) => <li key={i} className="project">
          <span>{project}</span>
          <ItemMenuIcon idx={i} />
          <ItemMenu idx={i} />
        </li>)}
      </ul>
    );
  }
}

export default Project;
