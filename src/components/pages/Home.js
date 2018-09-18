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
    const { site } = this.props;

    return (<Main {...this.props.site} />)
  }
}

Home.propTypes = {
  site: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    site: state.site
  };
}

export default connect(mapStateToProps)(Home);
