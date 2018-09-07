import React from 'react';

class EditIcon extends React.Component {

  constructor(props) {

    super(props);

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    const { callback } = this.props;

    callback()
  }

  render() {

    const { edit } = this.props;

    let editIcon = (edit) ?
      `https://s3.us-east-2.amazonaws.com/ui-icons/grey/x-circle.svg` :
      `https://s3.us-east-2.amazonaws.com/ui-icons/grey/edit.svg`

    return (
      <span onClick={this.toggle}
        id="edit_icon"
        className="icon edit"
        style={{ backgroundImage: "url(" + editIcon + ")" }} />
    )
  }
}

export default EditIcon;
