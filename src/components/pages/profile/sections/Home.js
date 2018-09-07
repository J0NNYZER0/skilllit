import React from 'react';
import { Link, Element } from 'react-scroll';
import Avatar from '../../../common/Avatar';
import TalkBubble from '../../../common/TalkBubble';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const { home } = this.props;

    return (
      <div>
        <Avatar profile_pic={home.avatar} selected_profile_pic={home.selected_avatar} />
        <TalkBubble talk_bubble={home.talk_bubble} el="avatar" />
        <h1 dangerouslySetInnerHTML={{__html: `${home.title}`}} />
        <p dangerouslySetInnerHTML={{__html: `${home.tagline}`}} />
        <Link className="down_animation" activeClass="active" to="experience"
          spy={true} smooth={true}
          offset={0} duration={500}
          onSetActive={this.handleSetActive}>
          <span className="down_arrow" />
        </Link>
      </div>
    );
  }
}

export default Home;
