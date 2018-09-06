import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Experience from './Experience';
import Skillset from './Skillset';
import Education from './Education';
import Resume from './Resume';
import Contact from './Contact';
import { Link, Element } from 'react-scroll';
import SiteLogo from '../common/SiteLogo';
import TalkBubble from '../common/TalkBubble';
import BackToTop from '../common/BackToTop';

class Home extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      toggle: false
    }
  }

  toggleSiteLogo() {

  }

  render() {

    const { site, home } = this.props;

    if (site.is_scrollable) {

      return [
        <section key="home" className="home">
          {home.map(({title, logo, selected_logo, tagline, talk_bubble},idx) => {

            return <div key={idx}>
              <SiteLogo logo={logo} selected_logo={selected_logo} />
              <TalkBubble talk_bubble={talk_bubble} el="site_logo" />
              <h1 dangerouslySetInnerHTML={{__html: `${title}`}} />
              <p dangerouslySetInnerHTML={{__html: `${tagline}`}} />
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
        <section key="back_to_top_section" className="last_section">
          <BackToTop key="back_to_top" />
        </section>
      ];
    } else {
      return [
        <section key="home" className="home">
          {home.map(({title, logo, selected_logo, tagline, talk_bubble},idx) => {

            return <div key={idx}>
              <SiteLogo logo={logo} selected_logo={selected_logo} />
              <TalkBubble talk_bubble={talk_bubble} el="site_logo" />
              <h1 dangerouslySetInnerHTML={{__html: `${title}`}} />
              <p dangerouslySetInnerHTML={{__html: `${tagline}`}} />
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
