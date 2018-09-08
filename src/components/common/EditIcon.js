import React from 'react';

class EditIcon extends React.Component {

  constructor(props) {

    super(props);

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    const { callback, idx } = this.props;

    callback(idx)
  }

  render() {
    const { edit, idx } = this.props;

    return (
      <span onClick={e => this.toggle(e)}
        id={'edit_exp_icon' + idx}
        className={edit !== true ? 'icon edit' : 'icon edit close'} />
    )
  }
}

export default EditIcon;


/*

toggle(e) {
  const { idx } = this.props;
  const target = e.currentTarget;
  const section = document.getElementById('experienceSection_' + idx);
  const form = document.getElementById('experienceForm_' + idx);
  const allIcons = document.getElementsByClassName('icon edit');
  const allSections = document.getElementsByClassName('job');
  const allForms = document.getElementsByClassName('form_profile_experience');

  for (let i = 0; i < allForms.length; i++) {
    section.style.display = 'flex';
    console.log('allIcons', allIcons)
    allIcons[i].style.className = 'icon edit';
    allSections[i].style.display = 'flex';
    allForms[i].style.display = 'none';
  }

  console.log('target', target)

  this.setState({ edit: this.state.edit !== true ? true : false})

  if (target.className === 'icon edit') {
    target.className = 'icon edit close';
    section.style.display = 'none';
    form.style.display = 'block';
  } else {
    target.className = 'icon edit';
    section.style.display = 'flex';
    form.style.display = 'none';
  }

}

*/
