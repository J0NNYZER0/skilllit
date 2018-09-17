import { combineReducers } from 'redux';
import accountReducer from './accountReducer';
import fetchReducer from './fetchReducer';
import profileReducer from './profileReducer';
import siteReducer from './siteReducer';
import fuelSavings from './fuelSavingsReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  account: accountReducer,
  fetch: fetchReducer,
  profile: profileReducer,
  site: siteReducer,
  routing: routerReducer,
  fuelSavings
});

export default rootReducer;
