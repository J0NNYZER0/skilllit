import React from 'react';

class AddIcon extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { toggle } = this.props;
    return (
      <span onClick={toggle}
        className="icon plus circle" />
    )
  }
}

export default AddIcon;
