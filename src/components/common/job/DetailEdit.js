import React from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Section from './Section';

class DetailEdit extends React.Component {

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
      { idx, actions, experience } = this.props,
      { id, projects, skills } = experience,
      addMode = idx === add;

    return (
      <div className="job_details">
        <Section { ...this.state } {...this.props}
          title="Project" upsertItem={actions.projectUpsert}
          deleteItem={actions.projectDelete}
          items={projects} />
        <Section { ...this.state } {...this.props}
          title="Skill" upsertItem={actions.skillUpsert}
          deleteItem={actions.skillDelete}
          items={skills} />
      </div>
    );
  }
}

export default DetailEdit;
