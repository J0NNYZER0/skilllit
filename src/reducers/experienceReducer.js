// https://redux.js.org/docs/recipes/reducers/ImmutableUpdatePatterns.html
import * as actionTypes from '../constants/actionTypes';
import initialState from './initialState';

const experienceReducer = (state = initialState.experience, action) => {

  switch (action.type) {

    case actionTypes.EXPERIENCE.LOAD:
      return action.data

    default:
      return state;
  }
}

export default experienceReducer;
