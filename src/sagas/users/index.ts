import {put, takeEvery, takeLatest} from 'redux-saga/effects'
import {LOAD_USERS_SAGA, UPDATE_IS_LOADING_USERS_SAGA} from "./types";
import {ILoadUsersAction, loadUsersProps, IUpdateIsLoadingUsersAction, updateIsLoadingUsersProps} from "../../reducers/users/types";

function* loadUsers(action: ILoadUsersAction) {
    yield put(loadUsersProps({ users: action.payload.users}))
}

export function* watchLoadUsers() {
    yield takeEvery(LOAD_USERS_SAGA, loadUsers)
}

function* isLoadUsers(action: IUpdateIsLoadingUsersAction) {
    yield put(updateIsLoadingUsersProps({ isLoadingUsers: action.payload.isLoadingUsers}))
}

export function* watchIsLoadUsers() {
    yield takeLatest(UPDATE_IS_LOADING_USERS_SAGA, isLoadUsers)
}