import * as types from '../constants/actionTypes';

// Simulate Async calls
export function beginAjaxCall() {
  return {type: types.AJAX.BEGIN};
}

export function ajaxCallError() {
  return {type: types.AJAX.ERROR};
}
