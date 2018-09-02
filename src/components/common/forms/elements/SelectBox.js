import React, {Component} from 'react';

class SelectBox extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onChange({ [e.target.name]: e.target.value })
  }

  render() {
    const { name, options, placeholder, selected, value } = this.props;

    console.log('selected', selected)
    return (
      <select
        className={selected !== '' ? 'selected' : ''}
        name={name}
        onChange={this.handleChange}
        value={value}>
        <option key={-1} className="select__default" value="" className="label">{placeholder}</option>
        {options.map(
          ({name, val},i) => <option key={i} value={val} className="label">{name}</option>
        )}
      </select>
    )
  }
}

export default SelectBox;
