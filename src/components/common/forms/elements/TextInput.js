import React, {Component} from 'react';
import InputError from './InputError';

class TextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valid: false,
      value: this.props.value,
      confirm_value: this.props.confirm_value,
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
      this.props.validate.map((v, i) => {
        if (this.props.confirm_value && i === 0) {

          if (!v[0](value, this.props.confirm_value) && v.length > 1)
            errors.push(v[1])
        } else {
          if (v.length === 2 && !v[0](value)) {
            errors.push(v[1])
          }
          if (v.length === 3 && !v[0](value, v[1])) {
            errors.push(v[2])
          }
        }
      })

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
    const { label, name, type, value, placeholder} = this.props;

    return (
      <div>
        {(label) ? <label>{label}</label> : null}
        <input
          autoComplete="off"
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={this.handleChange} />
        {!this.state.valid && this.state.errorMessages.map((el,idx) => <InputError key={idx} errorMessage={el} visible={this.state.errorVisible} />)}
      </div>
    )
  }
}

export default TextInput;
