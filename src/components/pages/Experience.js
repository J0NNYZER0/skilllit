import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import LoadMore from '../common/job/LoadMore';

class Experience extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {

    const { site } = this.props;

    return (
      <section>
        <h1>Experience</h1>
        <LoadMore list={site.experience} />
      </section>
    );
  }
}

Experience.propTypes = {
  site: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    site: state.site
  };
}

export default connect(mapStateToProps)(Experience);
