// https://redux.js.org/docs/recipes/reducers/ImmutableUpdatePatterns.html
import * as actionTypes from '../constants/actionTypes';
import initialState from './initialState';

const socialMediaReducer = (state = initialState.social_media, action) => {

  switch (action.type) {

    case actionTypes.SOCIALMEDIA.LOAD:
      return action.data

    default:
      return state;
  }
}

export default socialMediaReducer;
