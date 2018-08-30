import React, {Component} from 'react';

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

    callback(data);
  }

  render() {

    const { title } = this.props;

    return (
      <button onClick={this.handleClick} className="button">{title}</button>
    );
  }
}

export default FormButton;
