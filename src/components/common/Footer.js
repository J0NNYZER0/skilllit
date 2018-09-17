import React from 'react';
import PropTypes from "prop-types";
import {connect} from 'react-redux';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false
    }
    this.toggle = this.toggle.bind(this, this.state.toggle);
  }

  toggle() {
    let toggleState = this.state.toggle === true ? false : true;
    this.setState({toggle: toggleState});
  }

  render() {

    const { site } = this.props;
    let today = new Date(),
    year = today.getFullYear();

    return (
      <footer>
        <div className="menu__social">
          {site.social_media.map((el, idx) => {
            return <a key={idx} href={el.url} target="_blank">
              <span style={{ backgroundImage: "url(" + el.image + ")" }} />
            </a>
          })}
        </div>
        <div className="company_info">
          <span className="copyright">&copy; {year} {site.site.title}</span>
        </div>
      </footer>
    );
  }
}

Footer.propTypes = {
  site: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    site: state.site
  };
}

export default connect(mapStateToProps)(Footer);
