import React from 'react';
import ItemMenuIcon from './ItemMenuIcon';
import ItemMenu from './ItemMenu';

class Skill extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    const { idx, show, skills, toggleMenu } = this.props;

    return (
      <div id={'b_' + idx} className={show !== true ? 'skills' : 'skills show'}>
        <h4>Skills</h4>
        {skills.map((skill, i) => <div key={i} className="project"><div>{skill}</div></div>)}
      </div>
    );
  }
}

export default Skill;
