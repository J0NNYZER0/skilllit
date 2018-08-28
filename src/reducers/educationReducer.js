// https://redux.js.org/docs/recipes/reducers/ImmutableUpdatePatterns.html
import * as actionTypes from '../constants/actionTypes';
import initialState from './initialState';

const educationReducer = (state = initialState.education, action) => {

  switch (action.type) {

    case actionTypes.EDUCATION.LOAD:
      return action.data

    default:
      return state;
  }
}

export default educationReducer;
