import React, {Component} from 'react';

class TextAreaInput extends Component {
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
    const { autocomplete, cols, name, placeholder, rows } = this.props;

    return (
      <textarea
        autoComplete={autocomplete}
        cols={cols}
        name={name}
        onChange={this.handleChange}
        placeholder={placeholder}
        rows={rows}
        value={this.state.value} />
    )
  }
}

export default TextAreaInput;
