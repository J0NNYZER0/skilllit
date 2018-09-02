import React, {Component} from 'react';

class TextAreaInput extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onChange({ [e.target.name]: e.target.value })
  }

  render() {
    const { autocomplete, cols, name, placeholder, rows, value } = this.props;

    return (
      <textarea
        autoComplete={autocomplete}
        cols={cols}
        name={name}
        onChange={this.handleChange}
        placeholder={placeholder}
        rows={rows}
        value={value} />
    )
  }
}

export default TextAreaInput;
