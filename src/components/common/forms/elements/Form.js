import React, {Component} from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const { formId } = this.props;

    return (
      <form id={formId} className="form__login">
        {this.props.children}
      </form>
    );
  }
}

export default Form;
