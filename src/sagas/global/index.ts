import {put, takeEvery, takeLatest} from 'redux-saga/effects'
import {UPDATE_APP_STATUS_SAGA, UPDATE_AUTH_TOKEN_SAGA} from "./types";
import {
    IUpdateAppStatusAction,
    updateStatusProps,
    IUpdateAuthTokenExpAction,
    updateAuthTokenExpProps
} from "../../reducers/global/types";

function* updateAppStatus(action: IUpdateAppStatusAction) {
    yield put(updateStatusProps({appStatus: action.payload.appStatus}))
}

export function* watchUpdateAppStatus() {
    yield takeEvery(UPDATE_APP_STATUS_SAGA, updateAppStatus)
}

function* updateAuthTokenExp(action: IUpdateAuthTokenExpAction) {
    yield put(updateAuthTokenExpProps({authTokenExp: action.payload.authTokenExp}))
}

export function* watchUpdateAuthTokenExp() {
    yield takeLatest(UPDATE_AUTH_TOKEN_SAGA, updateAuthTokenExp)
}