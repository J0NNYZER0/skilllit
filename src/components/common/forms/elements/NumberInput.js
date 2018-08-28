import React, {Component} from 'react';
import InputError from './InputError';

class NumberInput extends Component {
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

  handleChange(e, name, isIncrement, callback) {
    let inputValue = this.state.value,
      newValue = (isIncrement) ? inputValue + 1 : inputValue - 1;

    newValue = (newValue < 1) ? 1 : (newValue > 10) ? 10 : newValue;

    this.setState({ value: newValue })

    if (this.props.validate)
        this.validate(newValue);

    callback(name, newValue)
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
    const {name, value, callback} = this.props;

    return (
      <div>
        <ul className="number__input">
          <li>
            <span onClick={e => this.handleChange(e, name, false, callback)} className="number__input--minus" />
          </li>
          <li>
            <input
              id="number__input--quantity"
              name={name}
              min="1" max="9" step="1"
              value={value}
              onChange={()=>{}}
              type="number" placeholder={1} />
          </li>
          <li>
            <span onClick={e => this.handleChange(e, name, true, callback)} className="number__input--plus" />
          </li>
        </ul>
        {!this.state.valid && this.state.errorMessages.map((el,idx) => <InputError key={idx} errorMessage={el} visible={this.state.errorVisible} />)}
      </div>
    )
  }
}

export default NumberInput;
















/*
import React from 'react';
import ValidationMessage from './ValidationMessage';

const NumberInput = ({options, onChange}) => {

  let inputClass = (options.errors.length !== 0) ? 'text__input--invalid' : '';

  return (
    <div>
      <ul className="number__input">
        <li>
          <span onClick={e => onChange(options.name, false)} className="number__input--minus" />
        </li>
        <li>
          <input
            id="number__input--quantity"
            name={options.name}
            min="1" max="9" step="1"
            className={inputClass}
            value={options.value}
            onChange={()=>{}}
            type="number" placeholder={1} />
        </li>
        <li>
          <span onClick={e => onChange(options.name, true)} className="number__input--plus" />
        </li>
      </ul>
      <ValidationMessage errors={options.errors} />
    </div>
    );
  }

export default NumberInput;

*/
