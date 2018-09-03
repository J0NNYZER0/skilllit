import React, {Component} from 'react';

class FormButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const { buttonTitle, callback } = this.props;

    return (
      <button onClick={callback} className="button">{buttonTitle}</button>
    );
  }
}

export default FormButton;
