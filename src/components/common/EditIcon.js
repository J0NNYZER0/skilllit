import React from 'react';

class EditIcon extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      toggle: false
    }
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    const { callback, edit } = this.props;

    let toggleState = this.state.toggle === true ? false : true;

    this.setState({toggle: toggleState});

    callback(edit)
  }

  render() {

    let editIcon = (this.state.toggle) ?
      `https://s3.us-east-2.amazonaws.com/ui-icons/black/x-circle.svg` :
      `https://s3.us-east-2.amazonaws.com/ui-icons/black/edit.svg`

    return (
      <span onClick={this.toggle}
        id="edit_icon"
        className="icon edit"
        style={{ backgroundImage: "url(" + editIcon + ")" }} />
    )
  }
}

export default EditIcon;
