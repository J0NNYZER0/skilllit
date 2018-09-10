// https://redux.js.org/docs/recipes/reducers/ImmutableUpdatePatterns.html
import * as actionTypes from '../constants/actionTypes';
import initialState from './initialState';

const profileReducer = (state = initialState.profile, action) => {
  let newState = {...state};

  switch (action.type) {

    case actionTypes.PROFILE.LOAD:
      return action.data

    case actionTypes.PROFILE.HOME.LOAD:
      return {...newState, home: action.data};

    case actionTypes.PROFILE.HOME.UPSERT:
      return {...newState, home: [action.data]};

    case actionTypes.PROFILE.EXPERIENCE.UPSERT:
      return {...newState, experience: [action.data]};

    case actionTypes.PROFILE.PROJECT.UPSERT: {

      return {...newState, profile: [action.data]};
    }

    case actionTypes.PROFILE.SKILL.UPSERT: {

      return {...newState, profile: [action.data]};
    }



    default:
      return state;
  }
}

export default profileReducer;
