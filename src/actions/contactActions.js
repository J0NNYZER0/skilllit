import * as types from '../constants/actionTypes';
import api from '../api/contactApi';
import mockApi from '../api/mock/contactApi';
import {beginAjaxCall} from './ajaxStatusActions';

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

export function insert(data) {

  return function (dispatch) {

    dispatch(beginAjaxCall());

    return api.insert(data).then(response => {

      dispatch(loadSuccess(response));

    }).catch(error => {

      throw(error);
    });
  };
}
