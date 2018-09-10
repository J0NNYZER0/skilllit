import React from 'react';

class Logo extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {avatar, className, selected_avatar, toggle, callback} = this.props;

    let pathToImage = toggle ?
      `${selected_avatar}` :
      `${avatar}`

    return (
      <span onClick={callback} id="avatar"
        className={className}
        style={{ backgroundImage: "url(" + pathToImage + ")" }} />
    )
  }
}

export default Logo;
