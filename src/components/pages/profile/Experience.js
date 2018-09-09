import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import EditIcon from '../../common/EditIcon';
import Job from '../../common/Job';
import JobDetail from '../../common/JobDetail';
import ExperienceForm from './forms/Experience';

class ProfileExperience extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      idx: null
    }


    this.toggle = this.toggle.bind(this);
  }

  toggle(idx) {

    if (this.state.idx === idx)
      this.setState({ idx: null });
    else
      this.setState({ idx: idx });

  }

  render() {

    const { experience } = this.props,
      { idx } = this.state;

    return (
      <section className="experience profile">
        <h1>Experience</h1>
        {experience.map((el, i) => {
          let renderForm = i === idx,
            editIcon = <EditIcon key={'edit_icon_' + i} callback={this.toggle} edit={renderForm} idx={i} />,
            section = (renderForm === false) && <Job key={'profile_exp_section' + i} idx={i} experience={el} />,
            detail = (renderForm === false) && <JobDetail key={'profile_job_section' + i} idx={i} experience={el} />,
            form = (renderForm === true) && <ExperienceForm key={'profile_exp_form' + i} toggle={this.toggle} idx={i} experience={el} />;

            return [editIcon,section, detail, form];
          }
        )}
      </section>
    );
  }
}

export default ProfileExperience;
