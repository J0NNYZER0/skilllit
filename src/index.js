/* eslint-disable import/default */
import React from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import { AppContainer } from 'react-hot-loader';
import Root from './components/Root';
import configureStore from './store/configureStore';
import * as contact from './actions/contactActions';
import * as education from './actions/educationActions';
import * as experience from './actions/experienceActions';
import * as home from './actions/homeActions';
import * as message from './actions/messageActions';
import * as resume from './actions/resumeActions';
import * as site from './actions/siteActions';
import * as skillset from './actions/skillsetActions';
import * as socialmedia from './actions/socialMediaActions';
require('./favicon.ico'); // Tell webpack to load favicon.ico
import './styles/all.scss'; // Yep, that's right. You can
import { syncHistoryWithStore } from 'react-router-redux';
//import * as ascii from './utils/ascii';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

store.dispatch(contact.load());
store.dispatch(education.load());
store.dispatch(experience.load());
store.dispatch(home.load());
store.dispatch(message.load());
store.dispatch(resume.load());
store.dispatch(site.load());
store.dispatch(skillset.load());
store.dispatch(socialmedia.load());

history.listen((location) => {
  if (window.ga)
    window.ga('send', 'pageview', location.pathname);
});

//ascii.consoleLogAscii();

render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./components/Root', () => {
    const NewRoot = require('./components/Root').default;
    render(
      <AppContainer>
        <NewRoot store={store} history={history} />
      </AppContainer>,
      document.getElementById('app')
    );
  });
}
