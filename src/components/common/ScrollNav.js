import React from 'react';
import { Link, Element } from 'react-scroll';

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

    if (nextProps.pathname !== this.props.pathname)
      this.setState({toggle: false});
  }

  toggleMenu() {
    console.log('toggle menu')
    this.setState({toggle: false});
  }

  toggle() {

    let toggleState = this.state.toggle === true ? false : true;

    this.setState({toggle: toggleState});
  }

  render() {

    const { site, pathname } = this.props;

    return (
      <nav className="scroll_nav">
        <Element name="top" />
        <div className="logo">
          <Link to="/">{site.title}</Link>
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
          <Link to="/">Home</Link>}
          <Link activeClass="active" to="experience" spy={true} smooth={true} offset={-250} duration={500} onClick={this.toggleMenu}>
            Experience
          </Link>
          <Link activeClass="active" to="skillset" spy={true} smooth={true} offset={-250} duration={500} onClick={this.toggleMenu}>
            Skillset
          </Link>
          <Link activeClass="active" to="education" spy={true} smooth={true} offset={-250} duration={500} onClick={this.toggleMenu}>
            Education
          </Link>
          <Link activeClass="active" to="resume" spy={true} smooth={true} offset={-250} duration={500} onClick={this.toggleMenu}>
            Resume
          </Link>
          <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-250} duration={500} onClick={this.toggleMenu}>
            Contact
          </Link>
        </div>}
      </nav>);
    }
}

export default ScrollNav;
