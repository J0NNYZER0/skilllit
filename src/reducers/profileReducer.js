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
      console.log('PROFILE.EXPERIENCE.UPSERT', action.data)
      let experience;
      if (!action.data.added) {

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

    case actionTypes.PROFILE.EXPERIENCE.DELETE: {

      let updated = newState.experience.filter((el, i) => i !== action.data.i)

      return {...newState, experience: updated };
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

      let updated = newState.experience.map((el,i) => {
        if (i === action.data.i) {
          let projects = el.projects.filter((el, i) => i !== action.data.ii)
          return { ...el, projects: [...projects] }
        } else return el
      })

      return {
        ...newState,
        experience: [...updated]
      };
    }

    case actionTypes.PROFILE.SKILL.UPSERT: {

        const addedOrUpdated = newState.experience.map(el => {
          if (action.data.experience_id == el.id) {
            let skills;
            if (!action.data.added) {

              const index = el.skills.findIndex(el => el.id === action.data.id);

              skills = [
                ...el.skills.slice(0, index),
                action.data,
                ...el.skills.slice(index + 1)
              ]

            } else {

              const added = { ...action.data };

              delete added.added;

              skills = [ ...el.skills, added ]
            }
            return { ...el, skills: skills}
          } else {
            return el;
          }
        })

        return { ...newState, experience: addedOrUpdated };
    }

    case actionTypes.PROFILE.SKILL.DELETE: {

      let updated = newState.experience.map((el,i) => {
        if (i === action.data.i) {
          let skills = el.skills.filter((el, i) => i !== action.data.ii)
          return { ...el, skills: [...skills] }
        } else return el
      })

      return {
        ...newState,
        experience: [...updated]
      };
    }

    default:
      return state;
  }
}

export default profileReducer;
