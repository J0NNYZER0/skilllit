import * as regex from '../../../../constants/regex';

export function isEmail(value) {

  return regex.EMAIL.test(String(value).toLowerCase());
}

export function _confirm(value, confirmed) {
  window.setTimeout(() => {
    if (confirmed && confirmed.length) {
      this.refs.confirm_password.validate(confirmed);
    }
  })
}

export function validatePassword(value) {

  return regex.PASSWORD.test(String(value).toLowerCase());
}

export function confirm(value, confirmed) {

  return (value === confirmed);
}

export function isMin(value, options) {

  let r = regex.MIN(options.min)
  return r.test(String(value).toLowerCase());
}

export function isRequired(value) {

  return regex.REQUIRED.test(String(value).toLowerCase());
}

export function toggleSubmitButton() {

  let values = Object.values({...this.state.values});
  let errors = Object.values({...this.state.errors});

  if (errors.indexOf(true) !== -1)
    return false;

  else if (values.indexOf('') !== -1)
    return false;

  else
    return true;
}

export function handleHasErrors(name, hasErrors) {

  this.state.errors[name] = hasErrors;
  this.setState({errors: this.state.errors});
}

export function handleOnChange(name, value) {

  this.state.values[name] = value;
  this.setState(this.state.values);
}

export function handleClearForm() {

  this.setState(this.defaultState());
}
