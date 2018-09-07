import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import EditIcon from '../../common/EditIcon';
import HomeSection from './sections/Home';
import HomeForm from './forms/Home';

class ProfileHome extends React.Component {
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

    const { home } = this.props,
      { edit } = this.state,
      section = home && <HomeSection home={home} />,
      form = home && <HomeForm home={home} toggle={this.toggle} />;

    return (
      <section className="home profile">
        <EditIcon callback={this.toggle} edit={this.state.edit} />
        {edit ?
          form : section}
      </section>
    );
  }
}

export default ProfileHome;
