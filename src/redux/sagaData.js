import { takeEvery, put, call } from "redux-saga/effects";
import { FETCH_DATA_REQUEST } from "./constants";
import axios from "axios";
import { fetchDataSuccess, fetchDataFailure } from "./action";
function* fetchData() {
  try {
    const response = yield call(axios.get, `https://dummyjson.com/products`);
    yield put(fetchDataSuccess(response.data));
  } catch (error) {
    yield put(fetchDataFailure(error));
  }
}

export function* sagaData() {
  yield takeEvery(FETCH_DATA_REQUEST, fetchData);
}
