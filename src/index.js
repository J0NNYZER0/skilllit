/* eslint-disable import/default */

import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import configureStore, { history } from './store/configureStore';
import Root from './components/Root';
import * as site from './actions/siteActions';
import * as profile from './actions/profileActions';

import './styles/all.scss'; // Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.
require('./favicon.ico'); // Tell webpack to load favicon.ico
const store = configureStore();

store.dispatch(site.loadContact());
store.dispatch(site.loadEducation());
store.dispatch(site.loadExperience());
store.dispatch(site.loadHome());
store.dispatch(site.loadResume());
store.dispatch(site.loadSite());
store.dispatch(site.loadSocialMedia());
store.dispatch(site.loadSkillset());
store.dispatch(profile.homeLoad(1));
store.dispatch(profile.experienceLoad(1));

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
