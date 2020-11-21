import {all} from 'redux-saga/effects'
import {watchLoadUsers, watchIsLoadUsers} from "./users";

export default function* rootSaga() {
    yield all([
        watchLoadUsers(),
        watchIsLoadUsers(),
    ])
}