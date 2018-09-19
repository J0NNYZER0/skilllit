import React from 'react';
import ItemMenuIcon from '../ItemMenuIcon';
import ItemMenuJob from '../ItemMenuJob';

class JobSummaryEdit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      iidx: -1,
      edit: -1,
      value: null
    }

    this.toggleMenu = this.toggleMenu.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  toggleMenu(idx) {
    let newState = { ...this.state };

    this.setState({...newState, iidx: this.state.iidx === idx ? -1 : idx });
  }

  deleteItem() {
    const { idx, experience, actions } = this.props,
    { id } = experience;

    actions.experienceDelete(id, idx);

    this.toggleMenu(-1);
  }

  render() {
    const { idx, experience, callback, editMode, actions } = this.props,
    { iidx, edit, value } = this.state;
    let showMenu = idx === iidx;
    return (
      <div className="job_summary">
        <div className="job_date">
          <div className="dates"><h4>{experience.to ? `${experience.from} - ${experience.to}` : `${experience.from}`}</h4></div>
          {editMode && <ItemMenuIcon callback={this.toggleMenu}
           idx={idx} show={showMenu} />}
        </div>
        {showMenu && <ItemMenuJob ii={idx} editCallback={callback} deleteCallback={this.deleteItem} />}
        <div className="job_header">
          <div className="job_title">
            <h3>{`${experience.title}`}</h3>
            <h3>&nbsp;@&nbsp;</h3>
            <h3>{`${experience.company}`}</h3>
          </div>
          <div className="job_location">
            <h3 className="light_italic">{`${experience.city}, ${experience.state}`}</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default JobSummaryEdit;
