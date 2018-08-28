import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Experience from './Experience';
import Skillset from './Skillset';
import Education from './Education';
import Resume from './Resume';
import Contact from './Contact';
import { Link, Element } from 'react-scroll';
import BackToTop from '../common/BackToTop';

class Home extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      toggle: false
    }
    this.toggle = this.toggle.bind(this, this.state.toggle);
    this.closeProfileMessage = this.closeProfileMessage.bind(this);
  }


  componentDidMount() {

    document.addEventListener('click', this.closeProfileMessage);
  }

  componentWillUnmount() {

    document.removeEventListener('click', this.closeProfileMessage);
  }

  toggle() {

    let toggleState = this.state.toggle === true ? false : true;
    this.setState({toggle: toggleState});
  }

  closeProfileMessage(e) {

    let toggleState;

    if (e.target.closest('.love_message') ||
      (e.target.className === 'profile_picture' &&
      this.state.toggle === false)) {

      toggleState = true;
    } else {

      toggleState = false;
    }

    this.setState({toggle: toggleState});
  }

  render() {
    const { site, home } = this.props;
    if (site.is_scrollable) {
      return [
        <section key="home" className="home">
          {home.map((section,idx) => {
            let profilePic = (this.state.toggle) ?
              section.profile_pic :
              section.selected_profile_pic;

            return <div key={idx}>
              <div>
                <span
                  className="profile_picture"
                  style={{ backgroundImage: "url(" + profilePic + ")" }} />
              </div>
              <div className={(this.state.toggle) ?
                'love_message show' :
                'love_message'}>
                <p>
                  Made with 🖤 by me. The UI is <b>Reactjs</b>.
                  The API is <b>Nodejs</b>. The DB is <b>Mysql</b>.
                  The PaAS is <b>Heroku</b>. The CDN is <b>AWS</b>.
                  The code is on <b>git</b>.
                </p>
              </div>
              <h1>{section.title}</h1>
              <p dangerouslySetInnerHTML={{__html: section.tagline}} />
              <Link className="down_animation" activeClass="active" to="experience"
                spy={true} smooth={true}
                offset={0} duration={500}
                onSetActive={this.handleSetActive}>
                <span className="down_arrow" />
              </Link>
            </div>
          })}
        </section>,
        <Element key="experience_anchor" name="experience" />,
        <Experience key="experience" />,
        <Element key="skillset_anchor" name="skillset" />,
        <Skillset key="skillset" />,
        <Element key="education_anchor" name="education" />,
        <Education key="education" />,
        <Element key="resume_anchor" name="resume" />,
        <Resume key="resume" />,
        <Element key="contact_anchor" name="contact" />,
        <Contact key="contact" />,
        <BackToTop key="back_to_top" />
      ];
    } else {
      return [
        <section key="home" className="home">
          {home.map((section,idx) => {
            let profilePic = (this.state.toggle) ?
              section.profile_pic :
              section.selected_profile_pic;

            return <div key={idx}>
              <div>
                <span
                  className="profile_picture"
                  style={{ backgroundImage: "url(" + profilePic + ")" }} />
              </div>
              <div className={(this.state.toggle) ?
                'love_message show' :
                'love_message'}>
                <p>
                  Made with 🖤 by me. The UI is <b>Reactjs</b>.
                  The API is <b>Nodejs</b>. The DB is <b>Mysql</b>.
                  The PaAS is <b>Heroku</b>. The CDN is <b>AWS</b>.
                  The code is on <b>git</b>.
                </p>
              </div>
              <h1>{section.title}</h1>
              <p dangerouslySetInnerHTML={{__html: section.tagline}} />
            </div>
          })}
        </section>
      ]
    }

  }
}

Home.propTypes = {
  site: PropTypes.object.isRequired,
  home: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    site: state.site,
    home: state.home
  };
}

export default connect(mapStateToProps)(Home);
