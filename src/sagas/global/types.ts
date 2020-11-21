export const UPDATE_APP_STATUS_SAGA = 'UPDATE_APP_STATUS_SAGA';
export const UPDATE_APP_STATUS = 'UPDATE_APP_STATUS';
interface IUpdateAppStatusSaga {
    readonly type: typeof UPDATE_APP_STATUS_SAGA;
    payload: {
        appStatus: 'enabled' | 'disabled'
    }
}

export const updateAppStatusPropsSaga = (payload: IUpdateAppStatusSaga['payload']): IUpdateAppStatusSaga => {
    return {
        type: UPDATE_APP_STATUS_SAGA,
        payload: payload
    }
};

export const UPDATE_AUTH_TOKEN_SAGA = 'UPDATE_AUTH_TOKEN_SAGA';
export const UPDATE_AUTH_TOKEN = 'UPDATE_AUTH_TOKEN';
interface IUpdateAuthTokenSAGA {
    readonly type: typeof UPDATE_AUTH_TOKEN_SAGA;
    payload: {
        authTokenExp: number
    }
}

export const updateAuthTokenPropsSaga = (payload: IUpdateAuthTokenSAGA['payload']): IUpdateAuthTokenSAGA => {
    return {
        type: UPDATE_AUTH_TOKEN_SAGA,
        payload: payload
    }
};