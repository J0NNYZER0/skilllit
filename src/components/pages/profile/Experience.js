import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import EditIcon from '../../common/EditIcon';
import JobEdit from '../../common/JobEdit';
import ExperienceForm from './forms/Experience';

class ProfileExperience extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const { experience } = this.props;

    return (
      <section className="experience profile">
        <h1>Experience</h1>
        {experience.map((el, i) => <JobEdit key={'experience_' + i} idx={i} experience={el} />)}
      </section>
    );
  }
}

export default ProfileExperience;
