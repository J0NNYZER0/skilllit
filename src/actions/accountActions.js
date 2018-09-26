import * as types from '../constants/actionTypes';
import * as fetchTypes from '../constants/fetchTypes';
import {AccountApi} from '../api/accountApi';
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

    return AccountApi.login(data).then(response => {

      dispatch(fetchSuccess(response));

    }).catch(error => {

      throw(error);
    });
  };
}

export const logout = () => {
  return dispatch => {

    dispatch(beginAjaxCall());

    return AccountApi.logout().then(response => {

      dispatch(fetchSuccess(response));

    }).catch(error => {

      throw(error);
    });
  };
}
