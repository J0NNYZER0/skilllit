import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class FormButton extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  handleClick(e) {

    e.preventDefault();

    const { callback, formId, fetch } = this.props;

    let elements = [...document.getElementById(formId).elements],
      data = {}

    for (let i = 0; i < elements.length - 1; i++)
      data[elements[i].name] = elements[i].value

    callback(data)

  }

  render() {

    const { title } = this.props;

    return (
      <button onClick={this.handleClick} className="button">{title}</button>
    );
  }
}

FormButton.propTypes = {

  fetch: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    fetch: state.fetch
  };
}

export default connect(mapStateToProps)(FormButton);
