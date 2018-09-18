import React from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import ItemEdit from './ItemEdit';
import AddIcon from '../AddIcon';
import JobItemForm from '../forms/profile/JobItem';
import * as profileActions from '../../../actions/profileActions';

class JobDetailEdit extends React.Component {

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
      { idx, experience, actions } = this.props,
      {id, from, to, title, company, city, state, projects, skills } = experience,
      addMode = idx === add;

    return (
      <div className="job_details">
        <div className="projects">
          <div className="job_detail_title">
            <div><h4>Projects</h4></div>
            {!addMode && <div><AddIcon toggle={this.toggleAdd} /></div>}
          </div>
        {addMode && <JobItemForm idx={idx}
          cancelEditCb={this.toggleAdd}
          item={{}}
          experience_id={id}
          itemType="Add Project"
          buttonTitle="Add"
          callback={actions.projectUpsert} />}
        <ItemEdit
            idx={idx} items={projects}
            experience_id={id}
            itemType="Project"
            callback={actions.projectUpsert}
            deleteCallback={actions.projectDelete} />
        </div>
          <div className="projects">
            <div className="job_detail_title">
              <h4>Skills</h4>
            </div>
        <ItemEdit
            idx={idx} items={skills}
            experience_id={id}
            itemType="Skill"
            callback={actions.skillUpsert} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    actions: PropTypes.object.isRequired
  };
},
mapDispatchToProps = dispatch => {

  return {
    actions: bindActionCreators(profileActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(JobDetailEdit);
