import {put, takeEvery, takeLatest, call} from 'redux-saga/effects'
import {
    LOAD_USERS_SAGA,
    ILoadUsersActionSaga,
    UPDATE_IS_LOADING_USERS_SAGA,
    IUpdateIsLoadingUsersActionSAGA
} from "./types";
import {loadUsersProps, updateIsLoadingUsersProps} from "../../reducers/users/types";
import {fetchUsers} from '../../api/users'
import {displayErrorMessageProps} from "../../reducers/global/types";

function* loadUsers(action: ILoadUsersActionSaga) {
    try {
        const usersData: any[] = yield call(fetchUsers, action.payload.userid);
        yield put(loadUsersProps({users: usersData}))
    } catch (error) {
        yield put(displayErrorMessageProps({message: error.message}))
    }
}

export function* watchLoadUsers() {
    yield takeEvery(LOAD_USERS_SAGA, loadUsers)
}

function* isLoadUsers(action: IUpdateIsLoadingUsersActionSAGA) {
    yield put(updateIsLoadingUsersProps({isLoadingUsers: action.payload.isLoadingUsers}))
}

export function* watchIsLoadUsers() {
    yield takeLatest(UPDATE_IS_LOADING_USERS_SAGA, isLoadUsers)
}