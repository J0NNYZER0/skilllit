// https://redux.js.org/docs/recipes/reducers/ImmutableUpdatePatterns.html
import * as fetchTypes from '../constants/fetchTypes';
import initialState from './initialState';

const fetchReducer = (state = initialState.fetch, action) => {
  let newState = {...initialState.fetch}
  switch (action.type) {

    case fetchTypes.FETCH.SUCCESS:
      return {...newState, ...action.status}

    case fetchTypes.FETCH.ERROR:
      return action.data

    case fetchTypes.FETCH.IN_PROGRESS:
      return action.data

    default:
      return state;
  }
}

export default fetchReducer;
