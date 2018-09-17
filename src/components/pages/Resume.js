import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class Resume extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const { site } = this.props;

    return (
      <section>
        <h1>Resume</h1>
        {site.resume.map(({call_to_action, link}) => {
          return <div key="resume" className="download_container">
            <p dangerouslySetInnerHTML={{__html: `${call_to_action}`}} />
            <a className="download-resume" target="_blank" href={`${link}`} />
          </div>
        })}
      </section>
    );
  }
}

Resume.propTypes = {
  site: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    site: state.site
  };
}

export default connect(mapStateToProps)(Resume);
