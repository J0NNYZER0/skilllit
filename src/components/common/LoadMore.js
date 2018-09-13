import React from 'react';
import ShowMore from './ShowMore';

class LoadMore extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      items: props.list,
      visible: 3,
      error: false
    };

    this.loadMore = this.loadMore.bind(this);
  }

  loadMore() {
    this.setState((prev) => {
      return {visible: prev.visible + 3};
    });
  }

  render() {
    const { idx, title } = this.props;

    return (
      <div className={title}>
        <h4>{title}</h4>
        <div className="job_detail">
        {this.state.items.slice(0, this.state.visible).map((el, i) => <ShowMore key={i} description={el.description} />)}
        {this.state.visible < this.state.items.length &&
          <button onClick={this.loadMore} type="button" className="button load_more">Load more</button>
        }
        </div>
      </div>
    );
  }
}

export default LoadMore;
