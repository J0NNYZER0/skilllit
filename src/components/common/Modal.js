import React from 'react';

class Modal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false,
      title: '',
      content: ''
    }
  }

  toggle(title, content) {

    this.setState({
      show: (this.state.show === true) ? false : true,
      title: title || null,
      content: content || null
    });
  }

  render() {

    return (
      <div className={(this.state.show) ? "modal_wrapper show" : "modal_wrapper"}>
        <div className="modal">
          <div className="header">
            <div className="title">
              <h1>{this.state.title}</h1>
            </div>
            <div className="icon">
              <span id="toggle" onClick={this.toggle} className="close" />
            </div>
          </div>
          <div className="body">
            {this.state.content}
          </div>
        </div>
        <div onClick={this.toggle} className="background" />
      </div>
    );
  }
}

export default Modal;
