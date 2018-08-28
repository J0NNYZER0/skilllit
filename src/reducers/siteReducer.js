// https://redux.js.org/docs/recipes/reducers/ImmutableUpdatePatterns.html
import * as actionTypes from '../constants/actionTypes';
import initialState from './initialState';

const siteReducer = (state = initialState.site, action) => {

  switch (action.type) {

    case actionTypes.SITE.LOAD:
      return action.data

    default:
      return state;
  }
}

export default siteReducer;
