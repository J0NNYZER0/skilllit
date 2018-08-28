import React from 'react';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false
    }
    this.toggle = this.toggle.bind(this, this.state.toggle);
  }

  toggle() {
    let toggleState = this.state.toggle === true ? false : true;
    this.setState({toggle: toggleState});
  }

  render() {

    const { site, social_media } = this.props;

    let today = new Date(),
    year = today.getFullYear();

    return (
      <footer>
        <div className="menu__social">
          {social_media.map((el, idx) => {
            return <a key={idx} href={el.url} target="_blank">
              <span style={{ backgroundImage: el.image }} />
            </a>
          })}
        </div>
        <div className="company_info">
          <span className="copyright">&copy; {year} {site.title}</span>
        </div>
      </footer>
    );
  }
}

export default Footer;
