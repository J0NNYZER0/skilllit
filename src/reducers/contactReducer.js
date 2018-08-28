// https://redux.js.org/docs/recipes/reducers/ImmutableUpdatePatterns.html
import * as actionTypes from '../constants/actionTypes';
import initialState from './initialState';

const contactReducer = (state = initialState.contact, action) => {

  switch (action.type) {

    case actionTypes.CONTACT.LOAD:
      return action.data

    default:
      return state;
  }
}

export default contactReducer;
