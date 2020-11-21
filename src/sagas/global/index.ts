import {put, takeEvery, takeLatest} from 'redux-saga/effects'
import {
    UPDATE_APP_STATUS_SAGA,
    IUpdateAppStatusActionSaga,
    UPDATE_AUTH_TOKEN_SAGA,
    IUpdateAuthTokenActionSAGA
} from "./types";
import {
    updateStatusProps,
    updateAuthTokenExpProps
} from "../../reducers/global/types";

function* updateAppStatus(action: IUpdateAppStatusActionSaga) {
    yield put(updateStatusProps({appStatus: action.payload.appStatus}))
}

export function* watchUpdateAppStatus() {
    yield takeEvery(UPDATE_APP_STATUS_SAGA, updateAppStatus)
}

function* updateAuthTokenExp(action: IUpdateAuthTokenActionSAGA) {
    yield put(updateAuthTokenExpProps({authTokenExp: action.payload.authTokenExp}))
}

export function* watchUpdateAuthTokenExp() {
    yield takeLatest(UPDATE_AUTH_TOKEN_SAGA, updateAuthTokenExp)
}