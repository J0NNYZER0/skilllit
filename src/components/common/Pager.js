import React from 'react';
import PropTypes from 'prop-types';

class Pager extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      active: '',
      paged: [],
      page: 1
    }
  }

  componentWillReceiveProps(nextProps) {

    if(nextProps.filter !== this.props.filter ||
      nextProps.limit !== this.props.limit)
      this.setState({ page: 1 });
  }

  handleTabClick(e, page) {

    e.preventDefault();
    this.setState({ page: page });
  }

  render() {
    const {limit, filtered} = this.props;
    let start = limit * (this.state.page - 1);
    let deleteCount = start + limit;
    let paged = filtered.slice(start, deleteCount);
    let totalProducts = filtered.length;
    let pageCount = Math.ceil(totalProducts / this.props.limit);
    let pages = [];

    for (let i = 1; i < pageCount + 1; i++) {
      pages.push(i)
    }

    let pagerNodes = []

    return (
      <div className="pager__component--wrapper">
        <ul className="shop__list">
          {paged}
        </ul>
        <ul className="pager__buttons">
          {pagerNodes.concat(pages).map((page,i) => {
            if (i >= this.state.page - 4 && i <= this.state.page + 2) {
              return <li
                key={i}
                className={(this.state.page === i + 1) ? 'pager__active' : ''}
                id={'_' + page}
                onClick={e => this.handleTabClick(e, page)}>
                {page}
              </li>
            }
            }
          )}
        </ul>
      </div>
    );
  }
}

Pager.propTypes = {
  filtered: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ]),
  limit: PropTypes.number.isRequired,
  filter: PropTypes.string.isRequired
};

export default Pager;
