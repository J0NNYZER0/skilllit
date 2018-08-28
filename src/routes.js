import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Home from './components/pages/Home';
import Experience from './components/pages/Experience';
import Skillset from './components/pages/Skillset';
import Education from './components/pages/Education';
import Resume from './components/pages/Resume';
import Contact from './components/pages/Contact';
import NotFoundPage from './components/NotFoundPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="contact" component={Contact}/>
    <Route path="education" component={Education}/>
    <Route path="experience" component={Experience}/>
    <Route path="resume" component={Resume}/>
    <Route path="skillset" component={Skillset}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
