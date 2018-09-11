import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Main from './sections/Main';
import EditIcon from '../../common/EditIcon';
import HomeForm from './forms/Home';

class ProfileHome extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      edit: false
    }
    this.toggleEdit = this.toggleEdit.bind(this);
  }

  toggleEdit() {

    this.setState({ edit: !this.state.edit });
  }

  render() {
    const { profile } = this.props,
      { edit } = this.state;
    return [
      !edit && <EditIcon key="edit_icon" callback={this.toggleEdit} className="home_edit_icon" />,
      !edit && <Main key="main_section" site={profile.site} home={profile.home} className="avatar" />,
      edit && <HomeForm key="home_form" home={profile.home[0]} toggle={this.toggleEdit} />
    ]
  }
}

ProfileHome.propTypes = {
  profile: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    profile: state.profile
  };
}

export default connect(mapStateToProps)(ProfileHome);
