// https://redux.js.org/docs/recipes/reducers/ImmutableUpdatePatterns.html
import * as actionTypes from '../constants/actionTypes';
import initialState from './initialState';

const skillsetReducer = (state = initialState.skillset, action) => {

  switch (action.type) {

    case actionTypes.SKILLSET.LOAD:
      return action.data

    default:
      return state;
  }
}

export default skillsetReducer;
