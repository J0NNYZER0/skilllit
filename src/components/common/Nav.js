import React from 'react';
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import { NavLink } from 'react-router-dom';
import ScrollNav from './ScrollNav';

class Nav extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      toggle: false
    }

    this.toggle = this.toggle.bind(this);
  }

  componentWillReceiveProps(nextProps) {

    if (nextProps.location.pathname !== this.props.location.pathname)
      this.setState({toggle: false});
  }

  toggle() {

    this.setState({toggle: !this.state.toggle});
  }

  render() {

    const { site, location } = this.props;

    if (site.site.is_scrollable !== true) {
      return (
        <nav>
          <div className="logo">
            <NavLink exact to="/">{site.site.title}</NavLink>
            <div className="nav_menu_button">
              <div onClick={this.toggle} id="nav-icon" className={(this.state.toggle) ?
                'open' : '' }>
                <span />
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
          {<div className={(this.state.toggle) ?
            'menu show' : 'menu'}>
            {location.pathname !== '/' &&
            <NavLink exact to="/">Home</NavLink>}
            <NavLink to="/experience">Experience</NavLink>
            <NavLink to="/skillset">Skillset</NavLink>
            <NavLink to="/education">Education</NavLink>
            <NavLink to="/resume">Resume</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/login">Log In</NavLink>
            <NavLink to="/me">Me</NavLink>
          </div>}
        </nav>);
    } else {
      return (<ScrollNav {...this.props} />)
    }
    }
}

Nav.propTypes = {
  site: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    site: state.site
  };
}

export default connect(mapStateToProps)(Nav);
