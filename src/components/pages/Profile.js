import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import EditIcon from '../common/EditIcon';
import HomeSection from '../common/profile/HomeSection';
import HomeForm from '../common/forms/profile/home/Form'
import '../../styles/_profile.scss';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: null
    }

    this.toggle = this.toggle.bind(this);
  }

  toggle(edit) {

    edit = (!this.state.edit &&
      this.state.edit !== edit) ?
      edit : null;

    this.setState({ edit: edit });

  }

  render() {

    const { profile } = this.props,
      { edit } = this.state

    const profile_section = profile.home[0] && <HomeSection home={profile.home[0]} />,
      profile_form = profile.home[0] && <HomeForm home={profile.home[0]} />

    return (
      <section className="home profile">
        <EditIcon callback={this.toggle} edit="home" />
        {edit && edit === 'home' ?
          profile_form : profile_section}
      </section>
    );
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
