import React from 'react';
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import { NavLink } from "react-router-dom";
import { Element } from 'react-scroll';
import ScrollLink from './ScrollLink';

class ScrollNav extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      toggle: false
    }

    this.toggle = this.toggle.bind(this, this.state.toggle);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  componentWillReceiveProps(nextProps) {

    if (nextProps.location.pathname !== this.props.location.pathname)
      this.setState({toggle: false});
  }

  toggleMenu() {
    this.setState({toggle: false});
  }

  toggle() {

    this.setState({toggle: !this.state.toggle});
  }

  render() {

    const { site, pathname } = this.props;

    return (
      <nav className="scroll_nav">
        <Element name="top" />
        <div className="logo">
          <NavLink to="/">{site.site.title}</NavLink>
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
        {<div className={(this.state.toggle) ? 'menu show' : 'menu'}>
          {location.pathname !== '/' && <NavLink exact to="/">Home</NavLink>}
          <ScrollLink scrollLink={{ to:'experience', offset: -250, onClick: this.toggleMenu, text: 'Experience' }} />
          <ScrollLink scrollLink={{ to:'skillset', offset: -250, onClick: this.toggleMenu, text: 'Skillset' }} />
          <ScrollLink scrollLink={{ to:'education', offset: -250, onClick: this.toggleMenu, text: 'Education' }} />
          <ScrollLink scrollLink={{ to:'resume', offset: -250, onClick: this.toggleMenu, text: 'Resume' }} />
          <ScrollLink scrollLink={{ to:'contact', offset: -250, onClick: this.toggleMenu, text: 'Contact' }} />
          <NavLink to="/login">Log In</NavLink>
          <NavLink to="/me">Me</NavLink>
        </div>}
      </nav>);
    }
}

ScrollNav.propTypes = {
  site: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    site: state.site
  };
}

export default connect(mapStateToProps)(ScrollNav);
