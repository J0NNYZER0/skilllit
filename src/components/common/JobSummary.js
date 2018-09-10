import React from 'react';

const JobSummaryEdit = ({ idx, experience }) => {
  return (
    <div id={"job_" + idx} className="job_summary">
      <div className="job_date">
        <h4>{experience.to ? `${experience.from} - ${experience.to}` : `${experience.from}`}</h4>
      </div>
      <div className="job_header">
        <div className="job_title">
          <h3>{`${experience.title}`}</h3>
          <h3>&nbsp;@&nbsp;</h3>
          <h3>{`${experience.company}`}</h3>
        </div>
        <div className="job_location">
          <h3 className="light_italic">{`${experience.city}, ${experience.state}`}</h3>
        </div>
      </div>
    </div>
  );
}

export default JobSummaryEdit;
