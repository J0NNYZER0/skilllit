import React from 'react';

class Logo extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {toggle, callback} = this.props;

    let className = toggle ? 'sprite site_avatar clicked' : 'sprite site_avatar'

    return (
      <span onClick={callback} id="avatar"
        className={className} />
    )
  }
}

export default Logo;
