import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class Education extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { education } = this.props;

    return (
      <section className="education">
        <h1>Education</h1>
        <div className="download_container">
          {education.map(level => <p key="education" dangerouslySetInnerHTML={{__html: level.bachelors}} />)}
        </div>
      </section>
    );
  }
}

Education.propTypes = {
  education: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    education: state.education
  };
}

export default connect(mapStateToProps)(Education);
