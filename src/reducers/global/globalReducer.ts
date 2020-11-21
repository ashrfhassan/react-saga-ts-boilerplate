import {GlobalActions} from './types'
import {ERROR_MESSAGE, UPDATE_APP_STATUS, UPDATE_AUTH_TOKEN} from "../../sagas/global/types";

interface IGlobalState {
    errorMessage: string,
    appStatus: string,
    authTokenExp: number,
}

const globalState: IGlobalState = {
    errorMessage: '',
    appStatus: 'enabled',
    authTokenExp: 0,
};

const globalReducer = (state = globalState, action: GlobalActions): IGlobalState => {
    switch (action.type) {
        case ERROR_MESSAGE:
            return {
                ...state,
                errorMessage: action.payload.message,
            };
        case UPDATE_APP_STATUS:
            return {
                ...state,
                appStatus: action.payload.appStatus,
            };
        case UPDATE_AUTH_TOKEN:
            return {
                ...state,
                authTokenExp: action.payload.authTokenExp,
            };
        default:
            return state;
    }
};

export default globalReducer;
