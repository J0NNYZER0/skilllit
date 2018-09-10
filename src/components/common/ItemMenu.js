import React from 'react';

class ItemMenu extends React.Component {

  constructor(props) {

    super(props);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }


  toggleMenu() {

    const { editCallback, idx, project } = this.props;

    editCallback(idx, project);
  }

  deleteItem() {
    const { editCallback, experience_id } = this.props;
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
