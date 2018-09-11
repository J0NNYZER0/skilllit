import React from 'react';
import ItemMenuIcon from './ItemMenuIcon';
import ItemMenu from './ItemMenu';

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
      <div id={'skill_' + idx} className={title + ' show'}>
        <h4>{title}</h4>
        {this.state.items.slice(0, this.state.visible).map((el, i) => <div key={i} className="project"><div>{el.description}</div></div>)}
        {this.state.visible < this.state.items.length &&
          <button onClick={this.loadMore} type="button" className="button load_more">Load more</button>
        }
      </div>
    );
  }
}

export default LoadMore;
