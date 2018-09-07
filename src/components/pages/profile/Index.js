import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Home from './Home';
import Experience from './Experience';
import '../../../styles/_profile.scss';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const { profile } = this.props;

    return [
      <Home key="home_section" home={profile.home[0]} />,
      <Experience key="experience_section" experience={profile.experience} />
    ]
  }
}

Profile.propTypes = {
  profile: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    profile: state.profile
  };
}

export default connect(mapStateToProps)(Profile);
