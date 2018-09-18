import React from 'react';
import SiteAvatar from './SiteAvatar';
import TalkBubble from './TalkBubble';

class LogoAndTalkBubble extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      toggle: false
    }
    this.toggleLogoAndTalkBubble = this.toggleLogoAndTalkBubble.bind(this);
  }

  toggleLogoAndTalkBubble() {
    const { toggle } = this.state;
    this.setState({ toggle: !toggle});
  }

  render() {
    const {site, main, className} = this.props,
      { toggle } = this.state;

    return [
      <SiteAvatar key="logo" toggle={toggle} callback={this.toggleLogoAndTalkBubble} />,
      <TalkBubble key="talk_bubble" talk_bubble={main.talk_bubble} toggle={toggle} />
    ];
  }
};

export default LogoAndTalkBubble;
