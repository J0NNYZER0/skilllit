import React from 'react';
import PropTypes from 'prop-types';

class Tabs extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      active: ''
    }
  }

  handleTabClick(e, tab) {

    e.preventDefault();
    let inactive = document.querySelectorAll('.tab__active'),
      hide = document.querySelectorAll('.active'),
      active = document.getElementById('_' + tab),
      show = document.getElementById(tab);

    inactive[0].className = '';
    hide[0].className = 'tab__content';
    active.className = 'tab__active';
    show.className = 'tab__content active';
  }

  render() {
    const { children } = this.props;
    return (
      <div className="tab__component--wrapper">
        <ul className="tab__buttons">
          {[].concat(children).map((tab,i) => {
            if (i === 0)
              return <li
                  key={i}
                  id={'_' + tab.ref}
                  className={tab.props.text ? 'tab__active text' : 'tab__active'}
                  onClick={e => this.handleTabClick(e, tab.ref)}>
                  {tab.props.text && tab.props.text} &nbsp;
                </li>
            return <li
              key={i}
              id={'_' + tab.ref}
              className={tab.props.text ? 'text' : ''}
              onClick={e => this.handleTabClick(e, tab.ref)}>
              {tab.props.text && tab.props.text} &nbsp;
            </li>}
          )}
        </ul>
        <div className="tab__contents">
          {children}
        </div>
      </div>
    );
  }
}

Tabs.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ])
};

export default Tabs;
