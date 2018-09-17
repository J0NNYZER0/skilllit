import * as types from '../constants/actionTypes';
import api from '../api/profileApi';
import mockApi from '../api/mock/profileApi';
import {beginAjaxCall} from './ajaxStatusActions';

export function loadSuccess(data) {
  return { type: types.PROFILE.LOAD, data };
}

export function homeLoadSuccess(data) {
  return { type: types.PROFILE.HOME.LOAD, data };
}

export function homeUpsertSuccess(data) {
  return { type: types.PROFILE.HOME.UPSERT, data };
}

export function experienceLoadSuccess(data) {
  return { type: types.PROFILE.EXPERIENCE.LOAD, data };
}

export function experienceUpsertSuccess(data) {
  return { type: types.PROFILE.EXPERIENCE.UPSERT, data };
}

export function projectLoadSuccess(data) {
  return { type: types.PROFILE.PROJECT.LOAD, data };
}

export function projectUpsertSuccess(data) {
  return { type: types.PROFILE.PROJECT.UPSERT, data };
}

export function projectDeleteSuccess(data) {
  return { type: types.PROFILE.PROJECT.DELETE, data };
}

export function skillLoadSuccess(data) {
  return { type: types.PROFILE.SKILL.LOAD, data };
}

export function skillUpsertSuccess(data) {
  return { type: types.PROFILE.SKILL.UPSERT, data };
}

export function load() {

  return function (dispatch) {

    dispatch(beginAjaxCall());

    return mockApi.load().then(data => {

      dispatch(loadSuccess(data));

    }).catch(error => {

      throw(error);
    });
  };
}

export function homeLoad(account_id) {

  return function (dispatch) {

    dispatch(beginAjaxCall());

    return api.homeLoad(account_id).then(data => {

      if (data.status === 200)
        dispatch(homeLoadSuccess(data.data));

    }).catch(error => {

      throw(error);
    });
  };
}

export function homeUpsert(data) {

  const updatedData = {...data}

  return function (dispatch) {

    dispatch(beginAjaxCall());

    return api.homeUpsert(data).then(data => {

      if (data.status === 200)
        dispatch(homeUpsertSuccess(updatedData));

    }).catch(error => {

      throw(error);
    });
  };
}

export function experienceLoad(account_id) {

  return function (dispatch) {

    dispatch(beginAjaxCall());

    return api.experienceLoad(account_id).then(data => {

      if (data.status === 200)
        dispatch(experienceLoadSuccess(data.data));

    }).catch(error => {

      throw(error);
    });
  };
}

export function experienceUpsert(data) {

  const updatedData = {...data}

  return function (dispatch) {

    dispatch(beginAjaxCall());

    return api.experienceUpsert(data).then(data => {

      if (data.status === 200)
        dispatch(experienceUpsertSuccess(updatedData));

    }).catch(error => {

      throw(error);
    });
  };
}

export function projectLoad(account_id) {

  return function (dispatch) {

    dispatch(beginAjaxCall());

    return api.projectLoad(experience_id).then(data => {

      if (data.status === 200)
        dispatch(projectLoadSuccess(data.data));

    }).catch(error => {

      throw(error);
    });
  };
}

const resolveInsertId = (data, response) => {
  if (parseInt(data.id) !== 0) return data;
  else return {...data, id: response.data.id.toString(), added: true }
}

export function projectUpsert(data) {

  const updatedData = {...data}

  return function (dispatch) {

    dispatch(beginAjaxCall());

    return api.projectUpsert(data).then(data => {

      if (data.status === 200) {
        const resolvedData = resolveInsertId(updatedData, data);

        dispatch(projectUpsertSuccess(resolvedData));
      }

    }).catch(error => {

      throw(error);
    });
  };
}

export function projectDelete(id, experience_id) {

  return function (dispatch) {

    dispatch(beginAjaxCall());

    return api.projectLoad(id).then(data => {

      if (data.status === 200)
        dispatch(projectDeleteSuccess({ id: id, experience_id: experience_id }));

    }).catch(error => {

      throw(error);
    });
  };
}

export function skillLoad(account_id) {

  return function (dispatch) {

    dispatch(beginAjaxCall());

    return api.skillLoad(experience_id).then(data => {

      if (data.status === 200)
        dispatch(skillLoadSuccess(data.data));

    }).catch(error => {

      throw(error);
    });
  };
}

export function skillUpsert(data) {

  const updatedData = {...data}

  return function (dispatch) {

    dispatch(beginAjaxCall());

    return api.skillUpsert(data).then(data => {

      if (data.status === 200)
        dispatch(skillUpsertSuccess(updatedData));

    }).catch(error => {

      throw(error);
    });
  };
}
