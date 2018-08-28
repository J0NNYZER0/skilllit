import * as types from '../constants/actionTypes';
//import api from '../api/siteApi';
import api from '../api/mock/siteApi';
import {beginAjaxCall} from './ajaxStatusActions';

export function loadSuccess(data) {
  return { type: types.SITE.LOAD, data };
}

export function load() {

  return function (dispatch) {

    dispatch(beginAjaxCall());

    return api.load().then(data => {

      dispatch(loadSuccess(data));

    }).catch(error => {

      throw(error);
    });
  };
}
