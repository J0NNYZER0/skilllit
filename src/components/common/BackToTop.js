import React from 'react';
import { Link } from 'react-scroll';

class BackToTop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false
    }
  }

  render() {

    return (
      <div className="back_to_top">
        <Link activeClass="active" to="top"
          spy={true} smooth={true}
          offset={0} duration={500}
          onSetActive={this.handleSetActive}>
          Back To Top
        </Link>
      </div>
    );
  }
}

export default BackToTop;
