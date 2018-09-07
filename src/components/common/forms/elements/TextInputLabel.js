import React, {Component} from 'react';

class TextInputLabel extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { label_name } = this.props;

    return (<label>{label_name}</label>)
  }
}

export default TextInputLabel;
