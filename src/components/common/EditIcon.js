import React from 'react';

class EditIcon extends React.Component {

  constructor(props) {

    super(props);
    this.state = {
      close: false
    }
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    const { callback, idx } = this.props;
    this.setState({ close: !this.state.close })
    callback(idx)
  }

  render() {
    const { idx } = this.props,
      { close } = this.state;

    return (
      <span onClick={this.toggle}
        id={'edit_icon_' + idx}
        className={ !close ? 'icon edit' : 'icon edit close'} />
    )
  }
}

export default EditIcon;
