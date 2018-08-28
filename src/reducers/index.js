import { combineReducers } from 'redux';
import { routerReducer} from 'react-router-redux';
import contactReducer from './contactReducer';
import educationReducer from './educationReducer';
import experienceReducer from './experienceReducer';
import homeReducer from './homeReducer';
import messageReducer from './messageReducer';
import resumeReducer from './resumeReducer';
import siteReducer from './siteReducer';
import skillsetReducer from './skillsetReducer';
import socialMediaReducer from './socialMediaReducer';
const rootReducer = combineReducers({
  routing: routerReducer,
  contact: contactReducer,
  education: educationReducer,
  experience: experienceReducer,
  home: homeReducer,
  messages: messageReducer,
  resume: resumeReducer,
  site: siteReducer,
  skillset: skillsetReducer,
  social_media: socialMediaReducer
});

export default rootReducer;
