import React from 'react';
import ItemMenuIcon from '../ItemMenuIcon';
import ItemMenu from '../ItemMenu';
import ShowMore from '../ShowMore';
import JobItemForm from '../forms/profile/JobItem';

class JobDetailItem extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      iidx: -1,
      edit: -1,
      value: null
    }

    this.toggleMenu = this.toggleMenu.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.cancelEdit = this.cancelEdit.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  toggleMenu(idx) {

    let newState = { ...this.state };

    this.setState({...newState, iidx: this.state.iidx === idx ? -1 : idx });
  }

  toggleEdit(edit, item) {
    let newState = { ...this.state };

    if (this.state.edit === edit)
      this.setState({...newState, edit: -1 });
    else this.setState({...newState, edit: edit, value: item });
  }

  deleteItem(itemId, i, ii) {
    const { deleteCallback } = this.props;
    deleteCallback(itemId, i, ii);
    this.toggleMenu(-1);
  }

  cancelEdit() {
    let newState = { ...this.state };

    this.setState({...newState,  iidx: -1, edit: -1 });
  }

  render() {
    const { idx, items, experience_id, itemType, callback, deleteCallback } = this.props,
    { iidx, edit, value } = this.state;

    return (
        items.map((el, i) => {
          let showMenu = i === iidx,
          editMode = i === edit;

          return [
          <div key={i} className="job_detail_edit">
            {editMode !== true ?
              <ShowMore key={i} description={el.description} /> :
              <JobItemForm idx={i} cancelEditCb={this.cancelEdit}
                buttonTitle="Update" item={el} {...this.props} />}
            {!editMode && <ItemMenuIcon callback={this.toggleMenu}
              key={'item_menu_icon_' + i} idx={i} show={showMenu} />}
          </div>,
          showMenu && !editMode && <ItemMenu key={'item_menu_' + i} i={idx} ii={i} editCallback={this.toggleEdit} deleteCallback={this.deleteItem} item={el} experience_id={experience_id} />
          ]
        }
      )
    );
  }
}

export default JobDetailItem;
