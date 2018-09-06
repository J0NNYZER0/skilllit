import React from 'react';

class Avatar extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      toggle: false
    }
    this.toggleSiteLogo = this.toggleSiteLogo.bind(this);
  }

  toggleSiteLogo() {
    let toggleState = this.state.toggle === true ? false : true;

    this.setState({toggle: toggleState});
  }

  render() {
    const {profile_pic, selected_profile_pic} = this.props;
    let profilePic = (this.state.toggle) ?
      `${selected_profile_pic}` :
      `${profile_pic}`

    return (
      <span onClick={this.toggleSiteLogo}
        id="avatar"
        className="avatar"
        style={{ backgroundImage: "url(" + profilePic + ")" }} />
    )
  }
}

export default Avatar;
