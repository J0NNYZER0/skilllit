import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { withRouter } from 'react-router';
import Modal from './common/Modal';
import Nav from './common/Nav';
import Footer from './common/Footer';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const { location, site, social_media } = this.props;

    return (
      <div className="layout">
        <Modal />
        <Nav pathname={location.pathname} site={site} />
        <main className="scrollable">
          {React.cloneElement(this.props.children, { })}
          <Footer site={site} social_media={social_media}  />
        </main>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element,
  location: PropTypes.object,
  site: PropTypes.object.isRequired,
  pathname: PropTypes.string
};

function mapStateToProps(state) {
  return {
    site: state.site,
    social_media: state.social_media
  };
}

export default withRouter(connect(mapStateToProps)(App));
