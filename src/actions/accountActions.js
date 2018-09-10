import * as types from '../constants/actionTypes';
import * as fetchTypes from '../constants/fetchTypes';
import api from '../api/accountApi';
import mockApi from '../api/mock/accountApi';
import {beginAjaxCall} from './ajaxStatusActions';

export function fetchSuccess(status) {
  return { type: fetchTypes.FETCH.SUCCESS, status };
}

export function loginSuccess(data) {
  return { type: types.ACCOUNT.LOGIN, data };
}

export const login = data => {

  return dispatch => {

    dispatch(beginAjaxCall());

    return api.login(data).then(response => {

      dispatch(fetchSuccess(response));

    }).catch(error => {

      throw(error);
    });
  };
}
