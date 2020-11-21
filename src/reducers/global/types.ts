import {UPDATE_APP_STATUS, UPDATE_AUTH_TOKEN, ERROR_MESSAGE} from '../../sagas/global/types'

export interface IDisplayErrorMessageAction {
    readonly type: typeof ERROR_MESSAGE;
    payload: {
        message: string
    }
}

export const displayErrorMessageProps = (payload: IDisplayErrorMessageAction['payload']): IDisplayErrorMessageAction => {
    return {
        type: ERROR_MESSAGE,
        payload: payload
    }
};

export interface IUpdateAppStatusAction {
    readonly type: typeof UPDATE_APP_STATUS;
    payload: {
        appStatus: 'enabled' | 'disabled'
    }
}

export const updateStatusProps = (payload: IUpdateAppStatusAction['payload']): IUpdateAppStatusAction => {
    return {
        type: UPDATE_APP_STATUS,
        payload: payload
    }
};

export interface IUpdateAuthTokenExpAction {
    readonly type: typeof UPDATE_AUTH_TOKEN;
    payload: {
        authTokenExp: number
    }
}

export const updateAuthTokenExpProps = (payload: IUpdateAuthTokenExpAction['payload']): IUpdateAuthTokenExpAction => {
    return {
        type: UPDATE_AUTH_TOKEN,
        payload: payload
    }
};

export type GlobalActions = IDisplayErrorMessageAction | IUpdateAppStatusAction | IUpdateAuthTokenExpAction;