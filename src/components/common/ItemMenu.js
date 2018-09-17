import React from 'react';

class ItemMenu extends React.Component {

  constructor(props) {

    super(props);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }


  toggleMenu() {

    const { editCallback, idx, item } = this.props;

    editCallback(idx, item);
  }

  deleteItem() {
    const { deleteCallback } = this.props;

    deleteCallback();
  }

  render() {

    return (
      <ul className="item_menu">
        <li onClick={this.toggleMenu}>Edit</li>
        <li onClick={this.deleteItem}>Delete</li>
      </ul>
    )
  }
}

export default ItemMenu;
