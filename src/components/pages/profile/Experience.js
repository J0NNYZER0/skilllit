import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import JobForm from './forms/JobAdd';
import JobEdit from '../../common/JobEdit';
import AddIcon from '../../common/AddIcon';

class ProfileExperience extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      add: false
    }

    this.toggleAdd = this.toggleAdd.bind(this);
  }

  toggleAdd() {
    this.setState({ add: !this.state.add })
  }

  render() {

    const { experience } = this.props,
      { add } = this.state;

    return (
      <section className="jobs">

        <h1>Experience</h1>
        {!add && <AddIcon toggle={this.toggleAdd} />}
        {add && <JobForm toggle={this.toggleAdd} />}
        {experience.map((el, i) => <JobEdit key={'experience_' + i} idx={i} experience={el} />)}
      </section>
    );
  }
}

export default ProfileExperience;
