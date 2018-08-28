import React from 'react';

class TalkBubble extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const { home } = this.props;

    return (
      <div className="love_message show">
        <p dangerouslySetInnerHTML={{__html: home[0].talk_bubble }} />
      </div>
    );
  }
}

export default TalkBubble;
