import React from 'react';
import Job from '../../../common/Job';

class Experience extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {

    const { experience } = this.props;

    return (<Job experience={experience} />);
  }
}

export default Experience;
