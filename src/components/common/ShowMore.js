import React from 'react';
import ItemMenuIcon from './ItemMenuIcon';
import ItemMenu from './ItemMenu';

class ShowMore extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      show: false,
      limit: 50
    };

    this.showMore = this.showMore.bind(this);
  }

  showMore() {
    this.setState({show: !this.state.show});
  }

  render() {
    const { description } = this.props,
      { show, limit } = this.state,
      end = show ? description.length : limit;
    return (
      <div className="description">
        <div>
          {description.substring(0, end)}
        </div>
        {!show && description.length > limit && <div onClick={this.showMore} className="show_more">...</div>}
      </div>
    );
  }
}

export default ShowMore;
