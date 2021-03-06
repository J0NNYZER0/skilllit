import React from 'react';

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
        <div className="desc_text">
          {description.substring(0, end)}
        </div>
        {!show && description.length > limit && <div><div onClick={this.showMore} className="show_more">...</div></div>}
      </div>
    );
  }
}

export default ShowMore;
