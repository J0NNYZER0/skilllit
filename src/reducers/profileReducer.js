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

    case actionTypes.PROFILE.EXPERIENCE.UPSERT: {

      const updated = newState.experience.map(el => {
        if (el.id === action.data.id) {
          return { ...el, ...action.data };
        }
        return el;
      })

      return {...newState, experience: updated };
    }

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
