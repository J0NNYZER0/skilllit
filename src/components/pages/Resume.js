import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class Resume extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const { resume } = this.props;

    return (
      <section className="resume">
        <h1>Resume</h1>
        {resume.map(resume => {
          return <div key="resume" className="download_container">
            <p dangerouslySetInnerHTML={{__html: resume.call_to_action}} />
            <a className="download-resume" target="_blank" href={resume.link_to_pdf} />
          </div>
        })}
      </section>
    );
  }
}

Resume.propTypes = {
  resume: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    resume: state.resume
  };
}

export default connect(mapStateToProps)(Resume);
