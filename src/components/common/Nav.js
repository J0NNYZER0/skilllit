import React from 'react';
import { Link, IndexLink } from 'react-router';
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
            <IndexLink to="/">{site.title}</IndexLink>
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
            <IndexLink to="/">Home</IndexLink>}
            <Link to="/experience">Experience</Link>
            <Link to="/skillset">Skillset</Link>
            <Link to="/education">Education</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/contact">Contact</Link>
          </div>}
        </nav>);
    } else {
      return (<ScrollNav pathname={location.pathname} site={site} />)
    }
    }
}

export default Nav;
