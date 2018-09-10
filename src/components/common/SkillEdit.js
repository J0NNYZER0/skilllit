import React from 'react';
import ItemMenuIcon from './ItemMenuIcon';
import ItemMenu from './ItemMenu';

class Skill extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      iidx: null,
    }

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu(idx) {
    if (this.state.iidx === idx)
      this.setState({ iidx: null });
    else
      this.setState({ iidx: idx });
  }

  render() {
    const { idx, show, skills, toggleMenu } = this.props;
    const { iidx } = this.state;

    return (
      <div id={'b_' + idx} className={show !== true ? 'skills' : 'skills show'}>
        <h4>Skills</h4>
        {skills.map((skill, i) => {
          let show = i === iidx;

          return <div key={i} className="project">
          <div>{skill}</div>
          <ItemMenuIcon callback={this.toggleMenu} key={'item_menu_icon_' + i} iidx={i} show={show} />
          { show && <ItemMenu key={'item_menu_' + i} idx={i} />}
        </div>})}
      </div>
    );
  }
}

export default Skill;
