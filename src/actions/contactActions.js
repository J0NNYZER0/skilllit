import * as types from '../constants/actionTypes';
import * as fetchTypes from '../constants/fetchTypes';
import api from '../api/contactApi';
import mockApi from '../api/mock/contactApi';
import {beginAjaxCall} from './ajaxStatusActions';

export function fetchSuccess(status) {
  return { type: fetchTypes.FETCH.SUCCESS, status };
}

export function loadSuccess(data) {
  return { type: types.CONTACT.LOAD, data };
}

export function insertSuccess(data) {
  return { type: types.CONTACT.INSERT, data };
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

export const insert = data => {

  return dispatch => {

    dispatch(beginAjaxCall());

    return api.insert(data).then(response => {

      dispatch(fetchSuccess(response));

    }).catch(error => {

      throw(error);
    });
  };
}
