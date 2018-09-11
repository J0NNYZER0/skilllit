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
    const { idx, className } = this.props,
      { close } = this.state;
    let _className = !className ? '' : className;

    return (
      <span onClick={this.toggle}
        className={ !close ? 'icon edit ' + _className : 'icon edit'} />
    )
  }
}

export default EditIcon;
