import {LOAD_USERS, UPDATE_IS_LOADING_USERS} from '../../sagas/users/types';

export interface ILoadUsersAction {
    readonly type: typeof LOAD_USERS;
    payload: {
        users: any[]
    }
}

export const loadUsersProps = (payload: ILoadUsersAction['payload']): ILoadUsersAction => {
    return {
        type: LOAD_USERS,
        payload: payload
    }
};

export interface IUpdateIsLoadingUsersAction {
    readonly type: typeof UPDATE_IS_LOADING_USERS;
    payload:{
        isLoadingUsers: boolean
    }
}

export const updateIsLoadingUsersProps = (payload: IUpdateIsLoadingUsersAction['payload']): IUpdateIsLoadingUsersAction => {
    return {
        type: UPDATE_IS_LOADING_USERS,
        payload: payload
    }
};

export type UsersActions = ILoadUsersAction | IUpdateIsLoadingUsersAction;