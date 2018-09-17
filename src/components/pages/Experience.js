import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Job from '../common/job/Index';

class Experience extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {

    const { site } = this.props;

    return (
      <section>
        <h1>Experience</h1>
        {site.experience.map((el, i) => <Job key={'profile_job_' + i} idx={i} experience={el} />)}
      </section>
    );
  }
}

Experience.propTypes = {
  site: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    site: state.site
  };
}

export default connect(mapStateToProps)(Experience);
