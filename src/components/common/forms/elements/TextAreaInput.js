import React, {Component} from 'react';
import InputError from './InputError';

class TextAreaInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valid: false,
      value: this.props.value,
      errorMessages: [],
      errorVisible: false
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
        value: e.target.value
    })
    if (this.props.validate) {
        this.validate(e.target.value);
    }
    if (this.props.onChange) {
      this.props.onChange(this.props.name, e.target.value);
    }
  }

  validate(value) {
    let errors = []
    if (this.props.validate) {
      this.props.validate.map(v => {
        if (v.length === 3 && !v[0](value, v[1])) {
          errors.push(v[2])
        }

        if (v.length === 2 && !v[0](value)) {
          errors.push(v[1])
        }
      });

      let hasErrors = errors.length > 0;

      if (!hasErrors)
        this.setState({
          valid: true,
          errorVisible: false
        });
      else
        this.setState({
          valid: false,
          errorVisible: true,
          errorMessages: errors
        });

      this.props.hasErrors(this.props.name, hasErrors);
    }
  }

  render() {
    const {label, name, value, placeholder} = this.props;

    return (
      <div>
        {(label) ? <label>{label}</label> : null}
        <textarea
          cols="50" rows="3"
          autoComplete="off"
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={this.handleChange} />
        {!this.state.valid && this.state.errorMessages.map((el,idx) => <InputError key={idx} errorMessage={el} visible={this.state.errorVisible} />)}
      </div>
    )
  }
}

export default TextAreaInput;
