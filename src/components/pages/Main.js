import React from 'react';
import { Link } from 'react-scroll';
import SiteAvatarAndTalkBubble from '../common/SiteAvatarAndTalkBubble';
import ScrollablePages from './ScrollablePages';

class Main extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { className, home, site} = this.props,
      scrollable = site.is_scrollable && <ScrollablePages key="scrollable_pages" />

    return [
      <section key="main_page" className="home_section">
        {home.map((el,idx) => {
          return <div key={idx}>
            <SiteAvatarAndTalkBubble site={site} main={el} className={className} />
            <h1 className="site_title" dangerouslySetInnerHTML={{__html: `${el.title}`}} />
            <p dangerouslySetInnerHTML={{__html: `${el.tagline}`}} />
            {site.is_scrollable && <Link className="down_animation" activeClass="active" to="experience"
              spy={true} smooth={true}
              offset={0} duration={500}>
              <span className="down_arrow" />
            </Link>}
          </div>
        })}
      </section>,
      scrollable
    ];

  }
};

export default Main;
