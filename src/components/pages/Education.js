import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class Education extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { site } = this.props;

    return (
      <section>
        <h1>Education</h1>
        <div className="download_container">
          {site.education.map(edu => <p key="education_1"><span>{`${edu.degree}, ${edu.focus} ${edu.gpa}`}</span><br/><span>{`${edu.school}`}</span></p>)}
        </div>
      </section>
    );
  }
}

Education.propTypes = {
  site: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    site: state.site
  };
}

export default connect(mapStateToProps)(Education);
