export const LOAD_USERS_SAGA = 'LOAD_USERS_SAGA';
export const LOAD_USERS = 'LOAD_USERS';
export interface ILoadUsersActionSaga {
    readonly type: typeof LOAD_USERS_SAGA;
    payload: {
        userid: number | undefined
    }
}

export const loadUsersPropsSaga = ( payload : ILoadUsersActionSaga['payload']): ILoadUsersActionSaga => {
    return {
        type: LOAD_USERS_SAGA,
        payload: payload
    }
};

export const UPDATE_IS_LOADING_USERS_SAGA = 'UPDATE_IS_LOADING_USERS_SAGA';
export const UPDATE_IS_LOADING_USERS = 'UPDATE_IS_LOADING_USERS';
export interface IUpdateIsLoadingUsersActionSAGA {
    readonly type: typeof UPDATE_IS_LOADING_USERS_SAGA;
    payload: {
        isLoadingUsers: boolean
    }
}

export const updateIsLoadingUsersPropsSaga = (payload: IUpdateIsLoadingUsersActionSAGA['payload']): IUpdateIsLoadingUsersActionSAGA => {
    return {
        type: UPDATE_IS_LOADING_USERS_SAGA,
        payload: payload
    }
};