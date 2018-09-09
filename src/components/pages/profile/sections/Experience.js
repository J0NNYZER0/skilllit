import React from 'react';
import Job from '../../../common/Job';

class Experience extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {

    const { idx, experience, toggleMenuCb } = this.props;

    return (<Job idx={idx} experience={experience} toggleMenuCb={toggleMenuCb} />);
  }
}

export default Experience;
