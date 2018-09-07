import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import EditIcon from '../../common/EditIcon';
import ExperienceSection from './sections/Experience';
import ExperienceForm from './forms/Experience';

class ProfileExperience extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false
    }

    this.toggle = this.toggle.bind(this);
  }

  toggle() {

    this.setState({ edit: this.state.edit === false ? true : false });
  }

  render() {

    const { experience } = this.props,
      { edit } = this.state;
    const form = experience && <ExperienceForm experience={experience} toggle={this.toggle} />

    return (
      <section className="experience profile">
        <h1>Experience</h1>
        {experience.map((el, idx) => {

        if (edit)
          return [
            <EditIcon key={'edit' + idx} callback={this.toggle} edit={this.state.edit} />,
            <ExperienceSection key={'section', idx} experience={el} />
          ]
        else return [
          <EditIcon key={'edit' + idx} callback={this.toggle} edit={this.state.edit} />,
          <ExperienceForm key={'section', idx} experience={el} />
        ]
        })}
      </section>
    );
  }
}

export default ProfileExperience;
