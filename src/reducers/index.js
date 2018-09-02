import { combineReducers } from 'redux';
import contactReducer from './contactReducer';
import educationReducer from './educationReducer';
import experienceReducer from './experienceReducer';
import fetchReducer from './fetchReducer';
import homeReducer from './homeReducer';
import messageReducer from './messageReducer';
import resumeReducer from './resumeReducer';
import siteReducer from './siteReducer';
import skillsetReducer from './skillsetReducer';
import socialMediaReducer from './socialMediaReducer';
import fuelSavings from './fuelSavingsReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  fuelSavings,
  contact: contactReducer,
  education: educationReducer,
  experience: experienceReducer,
  fetch: fetchReducer,
  home: homeReducer,
  messages: messageReducer,
  resume: resumeReducer,
  site: siteReducer,
  skillset: skillsetReducer,
  social_media: socialMediaReducer,
  routing: routerReducer
});

export default rootReducer;
