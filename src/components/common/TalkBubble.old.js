import React from 'react';

class TalkBubble extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toggle: false
    }

    this.toggleTalkBubble = this.toggleTalkBubble.bind(this);
  }

  componentDidMount() {
    const { el } = this.props;

    document.getElementById(el).addEventListener('click', this.toggleTalkBubble);

  }

  componentWillUnmount() {
    const { el } = this.props;

    document.getElementById(el).removeEventListener('click', this.toggleTalkBubble);
  }


  toggleTalkBubble(e) {
    const { el } = this.props;

    let toggleState;

    if (e.target.closest('.talk_bubble') ||
      (e.target.className === el &&
      this.state.toggle === false)) {

      toggleState = true;
    } else {

      toggleState = false;
    }

    this.setState({toggle: toggleState});
  }

  render() {

    const { talk_bubble } = this.props;

    return (
      this.state.toggle && <div className="talk_bubble show">
        <p dangerouslySetInnerHTML={{__html: talk_bubble }} />
      </div>
    );
  }
}

export default TalkBubble;
