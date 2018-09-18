import React from 'react';
import LoadMore from '../LoadMore';

class Detail extends React.Component {

  constructor(props) {

    super(props)
  }

  render() {
    const { experience } = this.props,
      { projects, skills } = experience;

    return (
      <div className="job_details">
        <div className="projects">
          <h4>Projects</h4>
          <LoadMore list={projects} buttonText="Load Projects" />
        </div>
        <div className="skills">
          <h4>SKills</h4>
          <LoadMore list={skills} buttonText="Load Skills" />
        </div>
      </div>
    );
  }
}

export default Detail;
