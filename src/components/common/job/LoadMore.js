import React from 'react';
import Job from './Index';

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
    return [
      this.state.items.slice(0, this.state.visible).map((el, i) => <Job key={'profile_job_' + i} idx={i} experience={el} />),
      this.state.visible < this.state.items.length &&
        <button key="load_more_key" onClick={this.loadMore} type="button" className="button load_more_jobs">Load Jobs</button>
    ];
  }
}

export default LoadMore;
