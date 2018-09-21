import React from "react";
import { Route, Switch } from "react-router-dom";
import { withRouter } from 'react-router';
import { hot } from "react-hot-loader";
import Modal from './common/Modal';
import Nav from './common/Nav';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Skillset from './pages/Skillset';
import Education from './pages/Education';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Me from './pages/profile/Index';
import NotFound from './pages/NotFound';
import Footer from './common/Footer';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return [
      <div key="layout" className="layout">
        <Modal />
        <Nav {...this.props} />
        <main className="scrollable">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/education" component={Education} />
            <Route path="/experience" component={Experience} />
            <Route path="/resume" component={Resume} />
            <Route path="/skillset" component={Skillset} />
            <Route path="/login/:token?" component={Login} />
            <Route path="/me" component={Me} />
            <Route component={NotFound}/>
          </Switch>
        </main>
      </div>,
      <Footer key="footer" />
    ];
  }
}

export default hot(module)(withRouter(App));
