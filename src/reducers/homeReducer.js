// https://redux.js.org/docs/recipes/reducers/ImmutableUpdatePatterns.html
import * as actionTypes from '../constants/actionTypes';
import initialState from './initialState';

const homeReducer = (state = initialState.home, action) => {

  switch (action.type) {

    case actionTypes.HOME.LOAD:
      return action.data

    default:
      return state;
  }
}

export default homeReducer;
