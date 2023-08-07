import { sagaData } from "./sagaData";
import { all } from "redux-saga/effects";

export function* rootSaga() {
  yield all([sagaData()]);
}
