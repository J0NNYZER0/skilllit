import React from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import ItemEdit from './ItemEdit';
import AddIcon from '../AddIcon';
import JobItemForm from '../forms/profile/JobItem';
import * as profileActions from '../../../actions/profileActions';

class Section extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      add: -1
    }

    this.toggleAdd = this.toggleAdd.bind(this);
    this.cancelAddItem = this.cancelAddItem.bind(this);
  }

  toggleAdd() {
    const { idx } = this.props;
    let newState = { ...this.state };

    if (this.state.add === idx)
      this.setState({...newState, add: -1 });
    else this.setState({...newState, add: idx });
  }

  cancelAddItem() {
    let newState = { ...this.state };

    this.setState({...newState,  add: -1 });
  }

  render() {
    const { add } = this.state,
      { idx, actions, experience, title, items, upsertItem, deleteItem } = this.props,
      { id } = experience,
      addMode = idx === add;

    return (
        <div className="projects">
          <div className="job_detail_title">
            <div><h4>{title + 's'}</h4></div>
            {!addMode && <div><AddIcon toggle={this.toggleAdd} /></div>}
          </div>
          {addMode && <JobItemForm idx={idx}
            cancelEditCb={this.toggleAdd}
            item={{}}
            experience_id={id}
            itemType={'Add' + title}
            buttonTitle="Add"
            callback={upsertItem} />}
          <ItemEdit
            idx={idx} items={items}
            experience_id={id}
            itemType={title}
            callback={upsertItem}
            deleteCallback={deleteItem} />
      </div>
    );
  }
}

export default Section;
