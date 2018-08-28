import React from 'react';

class Job extends React.Component {

  constructor(props) {

    super(props)

    this.toggle = this.toggle.bind(this)
  }

  toggle(e, id) {

    let button = e.target,
      allSelectedButtons = document.getElementsByClassName('button selected'),
      parentElement = button.parentElement,
      tabContainer = document.createElement('div'),
      className = 'project_details_tab_container',
      existing = document.getElementsByClassName(className),
      idToCheck = parentElement.nextSibling.childNodes.item(id).id,
      clone = document.getElementById(id).cloneNode(true);

    while (allSelectedButtons.length)
      allSelectedButtons[0].className = 'button';

    tabContainer.className = className;
    tabContainer.innerHTML = '';

    while(existing.length > 0)
      existing[0].parentNode.removeChild(existing[0]);

    parentElement.parentNode.insertBefore(tabContainer, parentElement.nextSibling);

    tabContainer.appendChild(clone);

    button.className = 'button selected';

    if (idToCheck === id) {
      button.className = 'button';
      existing[0].parentNode.removeChild(existing[0]);
    }

  }

  render() {
    const { idx, experience } = this.props;

    return (
      <div className="job">
        <div>
          <div className="job_date">
            <h4>{experience.from} {experience.to && "- " + experience.to}</h4>
          </div>
        </div>
        <div className="job_header">
          <div className="job_title">
            <h3>{experience.title}</h3>
            <h3>&nbsp;&nbsp;@&nbsp;&nbsp;</h3>
            <h3>{experience.company}</h3>
          </div>
          <div className="job_location">
            <h3>{experience.city}, {experience.state}</h3>
          </div>
        </div>
        <div className="button_wrapper">
          <button className="button" onClick={e => this.toggle(e, 'a_' + idx)}>Projects</button>
          <button className="button" onClick={e => this.toggle(e, 'b_' + idx)}>Skills</button>
        </div>
        <div className="project_details">
          <h4>Projects</h4>
          <ul id={'a_' + idx}>
            {experience.projects.map((el, i) => <li key={i}>{el}</li>)}
          </ul>
          <h4>Skills</h4>
          <ul id={'b_' + idx}>
            {experience.responsibilities.map((el, i) => <li key={i}>{el}</li>)}
          </ul>
        </div>
      </div>
    );
  }
}

export default Job;
