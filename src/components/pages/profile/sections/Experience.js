import React from 'react';
import Job from '../../../common/Job';

class Experience extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {

    const { idx, experience } = this.props;

    return (<Job idx={idx} experience={experience} />);
  }
}

export default Experience;
