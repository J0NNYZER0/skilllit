import * as types from '../constants/actionTypes';
//import api from '../api/resumeApi';
import api from '../api/mock/resumeApi';
import {beginAjaxCall} from './ajaxStatusActions';

export function loadSuccess(data) {
  return { type: types.RESUME.LOAD, data };
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
