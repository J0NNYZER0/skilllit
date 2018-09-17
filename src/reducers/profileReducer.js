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

      let experience;
      if (parseInt(action.data.id) !== 0) {

        experience = newState.experience.map(el => {

          if (action.data.id == el.id) {
            let updated = { ...el, ...action.data }

            return updated;
          } else {
            return el;
          }
        })
      } else {

        experience = [
          ...newState.experience,
          { projects: [], skills: [], ...action.data }
        ]
      }

      return {...newState, experience: experience };
    }


    case actionTypes.PROFILE.PROJECT.UPSERT: {

        const addedOrUpdated = newState.experience.map(el => {
          if (action.data.experience_id == el.id) {
            let projects;
            if (!action.data.added) {

              const index = el.projects.findIndex(el => el.id === action.data.id);

              projects = [
                ...el.projects.slice(0, index),
                action.data,
                ...el.projects.slice(index + 1)
              ]

            } else {

              const added = { ...action.data };

              delete added.added;

              projects = [ ...el.projects, added ]
            }
            return { ...el, projects: projects}
          } else {
            return el;
          }
        })

        return { ...newState, experience: addedOrUpdated };
    }

    case actionTypes.PROFILE.PROJECT.DELETE: {
      /*let deleted = {
        ...newState,
        experience: [
          ...newState.experience,
          {
            ...newState.experience[experience_id], }]}*/
      return {...newState, project: [action.data]};
    }

    case actionTypes.PROFILE.SKILL.UPSERT: {

      return {...newState, profile: [action.data]};
    }

    default:
      return state;
  }
}

export default profileReducer;
