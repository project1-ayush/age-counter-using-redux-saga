import { delay } from "redux-saga/effects";
import { takeEvery, put } from "redux-saga/effects";

export function* ageUpAsync() {
  yield delay(3000);
  yield put({ type: "AGE_UP_ASYNC", value: 1 });
}

export function* watchAgeUp() {
  yield takeEvery("AGE_UP", ageUpAsync);
}
