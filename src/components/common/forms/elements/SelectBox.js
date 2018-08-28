import React, {Component} from 'react';
import InputError from './InputError';

class SelectBox extends Component {
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

  handleChange(e, callback) {

    this.setState({
        value: e.target.value
    })
    if (this.props.validate) {
        this.validate(e.target.value);
    }
    //this check might not be needed
    if (this.props.onChange) {
      this.props.onChange(e.target.value);
    }
    callback(e.target.name, e.target.value)
  }

  validate(value) {
    let errors = []
    if (this.props.validate) {
      this.props.validate.map(v => {
        if (!v[0](value) && v.length > 1)
          errors.push(v[1])
      })
      let hasErrors = errors.length > 0;

      if (!hasErrors) {
        this.setState({
          valid: true,
          errorVisible: false
        });
      } else {
        this.setState({
          valid: false,
          errorVisible: true,
          errorMessages: errors
        });
      }

      this.props.hasErrors(this.props.name, hasErrors);
    }
  }

  render() {
    const {label, options, name, value, placeholder, callback} = this.props;
    return (
      <div>
      {(label) ? <label>{label}</label> : null}
      <select
        className={(this.state.value === '') ? '' : 'selected'}
        value={value}
        name={name}
        onChange={e => this.handleChange(e, callback)}>
        <option key={-1} className="select__default" value="" className="label">{placeholder}</option>
        {options.map(
          (el,i) => <option key={i} value={el.value} className="label">{el.name}</option>
        )}
      </select>
      {!this.state.valid && this.state.errorMessages.map((el,idx) => <InputError key={idx} errorMessage={el} visible={this.state.errorVisible} />)}
      </div>
    )
  }
}

export default SelectBox;
