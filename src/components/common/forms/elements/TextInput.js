import React, {Component} from 'react';
import TextInputLabel from './TextInputLabel';

class TextInput extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onChange({ [e.target.name]: e.target.value })
  }

  render() {
    const { autocomplete, name, placeholder, type, value, label_name } = this.props,
      textInputLabel = label_name && <TextInputLabel key={'text_input_label_' + name} label_name={name} />
    return [
      textInputLabel,
      <input key={'text_input_' + name}
        autoComplete={autocomplete}
        name={name}
        onChange={this.handleChange}
        placeholder={placeholder}
        type={type}
        value={value} />
    ]
  }
}

export default TextInput;
