// https://redux.js.org/docs/recipes/reducers/ImmutableUpdatePatterns.html
import * as actionTypes from '../constants/actionTypes';
import initialState from './initialState';

const resumeReducer = (state = initialState.resume, action) => {

  switch (action.type) {

    case actionTypes.RESUME.LOAD:
      return action.data

    default:
      return state;
  }
}

export default resumeReducer;
