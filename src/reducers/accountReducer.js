// https://redux.js.org/docs/recipes/reducers/ImmutableUpdatePatterns.html
import * as actionTypes from '../constants/actionTypes';
import initialState from './initialState';

const accountReducer = (state = initialState.account, action) => {

  switch (action.type) {

    case actionTypes.ACCOUNT.LOGIN:
      return action.data

    default:
      return state;
  }
}

export default accountReducer;
