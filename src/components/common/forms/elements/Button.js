import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class FormButton extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {

    e.preventDefault();

    const { callback, formId } = this.props;

    let elements = [...document.getElementById(formId).elements],
      data = {}

    for (let i = 0; i < elements.length - 1; i++)
      data[elements[i].name] = elements[i].value

    callback(data)

  }

  render() {

    const { buttonTitle } = this.props;

    return (
      <button onClick={this.handleClick} className="button">{buttonTitle}</button>
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
