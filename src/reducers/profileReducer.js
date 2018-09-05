// https://redux.js.org/docs/recipes/reducers/ImmutableUpdatePatterns.html
import * as actionTypes from '../constants/actionTypes';
import initialState from './initialState';

const profileReducer = (state = initialState.profile, action) => {

  switch (action.type) {

    case actionTypes.PROFILE.LOAD:
      return action.data

    default:
      return state;
  }
}

export default profileReducer;
