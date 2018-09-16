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

    case actionTypes.PROFILE.EXPERIENCE.LOAD: {
      const newData = { projects: [], skills: [] },
        experience = action.data.map(el => ({...newData, ...el}))

      return {...newState, experience: experience}
    }

    case actionTypes.PROFILE.EXPERIENCE.UPSERT: {

      if (parseInt(action.data.id) !== 0) {

        const updated = newState.experience.map(el => {

          if (el.id === action.data.id)
            return { ...el, ...action.data };

          return el;

        })

        return {...newState, experience: updated };

      } else {

        let newData = { projects: [], skills: [] };

        return {...newState, experience: [
          ...newState.experience,
          { ...newData, ...action.data }
        ]}
      }
    }

    case actionTypes.PROFILE.PROJECT.UPSERT: {

        const addedOrUpdated = newState.experience.map(el => {
          if (parseInt(action.data.experience_id) === el.id) {
            let projects;
            if (parseInt(action.data.id) !== 0) {
              const index = el.projects.findIndex(el => el.id === action.data.id);
              projects = [
                ...el.projects.slice(0, index),
                action.data,
                ...el.projects.slice(index + 1)
              ]
            } else {
              projects = [ ...el.projects, action.data ]
            }
            return { ...el, projects: projects}
          } else {
            return el;
          }
        })

        return { ...newState, experience: addedOrUpdated };
    }

    case actionTypes.PROFILE.SKILL.UPSERT: {

      return {...newState, profile: [action.data]};
    }

    default:
      return state;
  }
}

export default profileReducer;
