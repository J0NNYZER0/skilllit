import React from 'react';

class EditIcon extends React.Component {

  constructor(props) {

    super(props);

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    const { callback, idx } = this.props;

    callback(idx)
  }

  render() {
    const { edit, idx } = this.props;

    return (
      <span onClick={this.toggle}
        id={'edit_exp_icon' + idx}
        className={edit !== true ? 'icon edit' : 'icon edit close'} />
    )
  }
}

export default EditIcon;
