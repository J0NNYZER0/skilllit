import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ToggleSwitch extends Component {

  constructor(props) {
		super(props);
		this.state = {
      value: this.props.value
    }

    this.handleChange = this.handleChange.bind(this);
	}

  handleChange(e, callback) {
    let value = (this.state.value === 0) ? 1 : 0;

    this.setState({
        value: value
    })

    callback(e.target.name, value)
  }

  render() {
    const { name, label, callback } = this.props;
    let labelText = (this.state.value === 1) ? label + ' - On' : label + ' - Off';
    return (<div className="toggle__input--wrapper">
      <div className="toggle__input--label">{labelText}</div>
      <label className="switch">
        <input name={name} checked={this.state.value} type="checkbox" onChange={e => this.handleChange(e, callback)} />
        <span className="slider round"></span>
      </label>
    </div>);
  }

}

ToggleSwitch.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.number,
  callback: PropTypes.func.isRequired
};

export default ToggleSwitch;
