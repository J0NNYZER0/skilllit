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
