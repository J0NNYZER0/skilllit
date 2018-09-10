import React from 'react';

class TalkBubble extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { talk_bubble, toggle } = this.props;

    return (
      toggle && <div className="talk_bubble show">
        <p dangerouslySetInnerHTML={{__html: talk_bubble }} />
      </div>
    );
  }
}

export default TalkBubble;
