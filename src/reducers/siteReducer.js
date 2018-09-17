// https://redux.js.org/docs/recipes/reducers/ImmutableUpdatePatterns.html
import * as actionTypes from '../constants/actionTypes';
import initialState from './initialState';

const siteReducer = (state = initialState.site, action) => {
  let newState = {...state};

  switch (action.type) {

    case actionTypes.CONTACT.LOAD:
      return { ...newState, contact: action.data }

    case actionTypes.EDUCATION.LOAD:
      return { ...newState, education: action.data }

    case actionTypes.EXPERIENCE.LOAD:
      return { ...newState, experience: action.data }

    case actionTypes.HOME.LOAD:
      return { ...newState, home: action.data }

    case actionTypes.RESUME.LOAD:
      return { ...newState, resume: action.data }

    case actionTypes.SITE.LOAD:
      return { ...newState, site: action.data }

    case actionTypes.SKILLSET.LOAD:
      return { ...newState, skillset: action.data }

    case actionTypes.SOCIALMEDIA.LOAD:
      return { ...newState, social_media: action.data }

    default:
      return state;
  }
}

export default siteReducer;
