import React from 'react';
import Project from './Project';
import ItemMenuIcon from './ItemMenuIcon';

class Job extends React.Component {

  constructor(props) {

    super(props)

    this.toggle = this.toggle.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggle(e, id) {
    //e.preventDefault();
    //e.stopPropagation();
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

  toggleMenu() {
    const { toggleMenuCb } = this.props;

    toggleMenuCb()
  }

  render() {
    const { idx, experience, toggleMenuCb } = this.props,
      {from, to, title, company, city, state, projects, skills } = experience;

    return (
      <div id={"experienceSection_" + idx} className="job">
        <div>
          <div className="job_date">
            <h4>{to ? `${from} - ${to}` : `${from}`}</h4>
          </div>
        </div>
        <div className="job_header">
          <div className="job_title">
            <h3>{`${title} @ ${company}`}</h3>
          </div>
          <div className="job_location">
            <h3>{`${city}, ${state}`}</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Job;
