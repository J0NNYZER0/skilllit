import React from 'react';

class ItemMenuIcon extends React.Component {

  constructor(props) {

    super(props);

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {

    const { callback, idx } = this.props;

    callback(idx);
  }

  render() {
    const { idx, show } = this.props;
    return (
      <div key={'menu_icon_' + idx}
        id={'menu_icon_' + idx}
        onClick={this.toggleMenu}
        className={show ? 'menu_icon close' : 'menu_icon'} />
    )
  }
}

export default ItemMenuIcon;
