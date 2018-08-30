import React, {Component} from 'react';

class TextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
        value: e.target.value
    })
  }

  render() {
    const { autocomplete, name, placeholder, type } = this.props;

    return (
      <input
        autoComplete={autocomplete}
        name={name}
        onChange={this.handleChange}
        placeholder={placeholder}
        type={type}
        value={this.state.value} />)
  }
}

export default TextInput;
