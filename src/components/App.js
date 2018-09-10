/* eslint-disable import/no-named-as-default */
import { Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import React from "react";
import {connect} from 'react-redux';
import { withRouter } from 'react-router';
import { hot } from "react-hot-loader";
import Modal from './common/Modal';
import Nav from './common/Nav';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Skillset from './pages/Skillset';
import Education from './pages/Education';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Me from './pages/profile/Index';
import NotFound from './pages/NotFound';
import Footer from './common/Footer';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const { location, site, social_media } = this.props;

    return [
      <div key="layout" className="layout">
        <Modal />
        <Nav pathname={location.pathname} site={site} />
        <main className="scrollable">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/education" component={Education}/>
            <Route path="/experience" component={Experience}/>
            <Route path="/resume" component={Resume}/>
            <Route path="/skillset" component={Skillset}/>
            <Route path="/login" component={Login}/>
            <Route path="/me" component={Me}/>
            <Route component={NotFound}/>
          </Switch>
        </main>
      </div>,
      <Footer key="footer" site={site} social_media={social_media}  />
    ];
  }
}

App.propTypes = {
  location: PropTypes.object,
  site: PropTypes.object.isRequired,
  pathname: PropTypes.string,
  social_media: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    site: state.site,
    social_media: state.social_media
  };
}

export default hot(module)(withRouter(connect(mapStateToProps)(App)));
