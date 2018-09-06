import React from 'react';

class SiteLogo extends React.Component {

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
    const {logo, selected_logo} = this.props;
    let siteLogo = (this.state.toggle) ?
      `${selected_logo}` :
      `${logo}`

    return (
      <span onClick={this.toggleSiteLogo}
        id="site_logo"
        className="site_logo"
        style={{ backgroundImage: "url(" + siteLogo + ")" }} />
    )
  }
}

export default SiteLogo;
