import { NavLink } from 'react-router-dom';
import React from 'react';
import ScrollNav from './ScrollNav';

class Nav extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      toggle: false
    }

    this.toggle = this.toggle.bind(this, this.state.toggle);
  }

  componentWillReceiveProps(nextProps) {

    if (nextProps.pathname !== this.props.pathname)
      this.setState({toggle: false});
  }

  toggle() {

    let toggleState = this.state.toggle === true ? false : true;

    this.setState({toggle: toggleState});
  }

  render() {

    const { site, pathname } = this.props;

    if (site.is_scrollable !== true) {
      return (
        <nav>
          <div className="logo">
            <NavLink exact to="/">{site.title + 's'}</NavLink>
            <div className="menu_wrapper">
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
            {pathname !== '/' &&
            <NavLink exact to="/">Home</NavLink>}
            <NavLink to="/experience">Experience</NavLink>
            <NavLink to="/skillset">Skillset</NavLink>
            <NavLink to="/education">Education</NavLink>
            <NavLink to="/resume">Resume</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>}
        </nav>);
    } else {
      return (<ScrollNav pathname={location.pathname} site={site} />)
    }
    }
}

export default Nav;
