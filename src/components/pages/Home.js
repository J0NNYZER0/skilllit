import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Main from './Main';

class Home extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      toggle: false
    }
  }

  render() {
    const { site, home } = this.props;
    return (<Main site={site} home={home} className="skilllit_logo" />)
  }
}

Home.propTypes = {
  site: PropTypes.object.isRequired,
  home: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    site: state.site,
    home: state.home
  };
}

export default connect(mapStateToProps)(Home);
