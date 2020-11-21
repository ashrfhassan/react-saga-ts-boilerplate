export const ERROR_MESSAGE = 'ERROR_MESSAGE';

export const UPDATE_APP_STATUS_SAGA = 'UPDATE_APP_STATUS_SAGA';
export const UPDATE_APP_STATUS = 'UPDATE_APP_STATUS';
export interface IUpdateAppStatusActionSaga {
    readonly type: typeof UPDATE_APP_STATUS_SAGA;
    payload: {
        appStatus: 'enabled' | 'disabled'
    }
}

export const updateAppStatusPropsSaga = (payload: IUpdateAppStatusActionSaga['payload']): IUpdateAppStatusActionSaga => {
    return {
        type: UPDATE_APP_STATUS_SAGA,
        payload: payload
    }
};

export const UPDATE_AUTH_TOKEN_SAGA = 'UPDATE_AUTH_TOKEN_SAGA';
export const UPDATE_AUTH_TOKEN = 'UPDATE_AUTH_TOKEN';
export interface IUpdateAuthTokenActionSAGA {
    readonly type: typeof UPDATE_AUTH_TOKEN_SAGA;
    payload: {
        authTokenExp: number
    }
}

export const updateAuthTokenPropsSaga = (payload: IUpdateAuthTokenActionSAGA['payload']): IUpdateAuthTokenActionSAGA => {
    return {
        type: UPDATE_AUTH_TOKEN_SAGA,
        payload: payload
    }
};