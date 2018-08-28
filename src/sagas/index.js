import { takeEvery, put, all } from 'redux-saga/effects';

export function* toggleModal(value) {
  yield put({ type: 'TOGGLE.MODAL', value: value.value});
}

export function* watchToggleModal() {
  yield takeEvery('WATCH.TOGGLE.MODAL', toggleModal);
}

export default function* rootSaga() {
  yield all([
    watchToggleModal()
  ]);
}
