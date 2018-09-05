import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { Link, Element } from 'react-scroll';
import TalkBubble from '../common/TalkBubble';
import '../../styles/_profile.scss';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false
    }

    this.closeProfileMessage = this.closeProfileMessage.bind(this);
  }


  componentDidMount() {
    document.addEventListener('click', this.closeProfileMessage);
  }

  componentWillUnmount() {

    document.removeEventListener('click', this.closeProfileMessage);
  }

  closeProfileMessage(e) {

    let toggleState;

    if (e.target.closest('.love_message') ||
      (e.target.className === 'profile_picture' &&
      this.state.toggle === false)) {
      console.log('toggle', toggleState)
      toggleState = true;
    } else {

      toggleState = false;
    }

    this.setState({toggle: toggleState});
  }

  render() {

    const { profile } = this.props;

    //console.log('profile', this.state.toggle)

    return (
      <section className="home profile">
          {profile.home.map(({title, profile_pic, selected_profile_pic, tagline},idx) => {

            let profilePic = (this.state.toggle) ?
              `${selected_profile_pic}` :
              `${profile_pic}`;

            return <div key={idx}>
              <div>
                <span className="profile_picture"
                  style={{ backgroundImage: "url(" + profilePic + ")" }} />
              </div>
              {this.state.toggle && <TalkBubble home={profile.home} />}
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
