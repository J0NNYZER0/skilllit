import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class Form extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
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

    const { formId, buttonTitle } = this.props;

    return (
      <form id={formId} className="form__login">
        {this.props.children}
        <button onClick={this.handleClick} className="button">{buttonTitle}</button>
      </form>
    );
  }
}

Form.propTypes = {
  fetch: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
  return {
    fetch: state.fetch
  };
}

export default connect(mapStateToProps)(Form);
