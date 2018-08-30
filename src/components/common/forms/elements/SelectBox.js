import React, {Component} from 'react';

class SelectBox extends Component {
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
    const { name, options, placeholder } = this.props;
    return (
      <select
        className={(this.state.value === '') ? '' : 'selected'}
        name={name}
        onChange={this.handleChange}
        value={this.state.value}>
        <option key={-1} className="select__default" value="" className="label">{placeholder}</option>
        {options.map(
          ({name, value},i) => <option key={i} value={value} className="label">{name}</option>
        )}
      </select>
    )
  }
}

export default SelectBox;
