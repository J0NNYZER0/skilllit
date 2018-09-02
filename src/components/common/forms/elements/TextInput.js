import React, {Component} from 'react';

class TextInput extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onChange({ [e.target.name]: e.target.value })
  }

  render() {
    const { autocomplete, name, placeholder, type, value } = this.props;

    return (
      <input
        autoComplete={autocomplete}
        name={name}
        onChange={this.handleChange}
        placeholder={placeholder}
        type={type}
        value={value} />)
  }
}

export default TextInput;
