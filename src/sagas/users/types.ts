export const LOAD_USERS_SAGA = 'LOAD_USERS_SAGA';
export const LOAD_USERS = 'LOAD_USERS';
interface ILoadUsersSaga {
    readonly type: typeof LOAD_USERS_SAGA;
    payload: {
        users: any[]
    }
}

export const loadUsersPropsSaga = ( payload : ILoadUsersSaga['payload']): ILoadUsersSaga => {
    return {
        type: LOAD_USERS_SAGA,
        payload: payload
    }
};

export const UPDATE_IS_LOADING_USERS_SAGA = 'UPDATE_IS_LOADING_USERS_SAGA';
export const UPDATE_IS_LOADING_USERS = 'UPDATE_IS_LOADING_USERS';
interface IUpdateIsLoadingUsersSAGA {
    readonly type: typeof UPDATE_IS_LOADING_USERS_SAGA;
    payload: {
        isLoadingUsers: boolean
    }
}

export const updateIsLoadingUsersPropsSaga = (payload: IUpdateIsLoadingUsersSAGA['payload']): IUpdateIsLoadingUsersSAGA => {
    return {
        type: UPDATE_IS_LOADING_USERS_SAGA,
        payload: payload
    }
};