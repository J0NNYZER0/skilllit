import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class Skillset extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const { site } = this.props;

    return (
      <section>
        <h1>Skillset</h1>
        {site.skillset.length > 0 && site.skillset.map(({category, skills}, idx) => {
          return <div key={idx}>
            <h2>{`${category}`}</h2>
            {<ul className="tagcloud">
              {skills.map((skill, idx) => <li key={idx}>{skill}</li>)}
            </ul>}
          </div>
          }
        )}
      </section>
    );
  }
}

Skillset.propTypes = {
  site: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    site: state.site
  };
}

export default connect(mapStateToProps)(Skillset);
