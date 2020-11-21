import {GlobalActions} from './types'
import {UPDATE_APP_STATUS, UPDATE_AUTH_TOKEN} from "../../sagas/global/types";

interface IGlobalState {
    appStatus: string,
    authTokenExp: number,
}

const globalState: IGlobalState = {
    appStatus: 'enabled',
    authTokenExp: 0,
};

const globalReducer = (state = globalState, action: GlobalActions): IGlobalState => {
    switch (action.type) {
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
