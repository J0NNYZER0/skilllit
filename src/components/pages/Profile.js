import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { Link, Element } from 'react-scroll';
import Avatar from '../common/Avatar';
import TalkBubble from '../common/TalkBubble';
import '../../styles/_profile.scss';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false
    }
  }

  render() {

    const { profile } = this.props;

    return (
      <section className="home profile">
          {profile.home.map(({title, profile_pic, selected_profile_pic, tagline, talk_bubble},idx) => {

            return <div key={idx}>
              <Avatar profile_pic={profile_pic} selected_profile_pic={selected_profile_pic} />
              <TalkBubble talk_bubble={talk_bubble} el="avatar" />
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
      </section>
    );
  }
}

Profile.propTypes = {
  profile: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    profile: state.profile
  };
}

export default connect(mapStateToProps)(Profile);
