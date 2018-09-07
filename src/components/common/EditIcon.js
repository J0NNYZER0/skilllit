import React from 'react';

class EditIcon extends React.Component {

  constructor(props) {

    super(props);

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    const { callback, form_to_edit } = this.props;

    callback(form_to_edit)
  }

  render() {

    const { edit } = this.props;

    let editIcon = (edit) ?
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
