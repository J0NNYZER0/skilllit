import React from 'react';

class ItemMenu extends React.Component {

  constructor(props) {

    super(props);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }


  toggleMenu() {

    const { editCallback, ii, item } = this.props;

    editCallback(ii, item);
  }

  deleteItem() {
    const { deleteCallback, item, i, ii } = this.props;

    deleteCallback(item.id, i, ii);
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
