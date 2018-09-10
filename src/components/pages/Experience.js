import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Job from '../common/Job';

class Experience extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {

    const { experience } = this.props;

    return (
      <section>
        <h1>Experience</h1>
        {experience.map((el, i) => <Job key={'profile_job_' + i} idx={i} experience={el} />)}
      </section>
    );
  }
}

Experience.propTypes = {
  experience: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    experience: state.experience
  };
}

export default connect(mapStateToProps)(Experience);
