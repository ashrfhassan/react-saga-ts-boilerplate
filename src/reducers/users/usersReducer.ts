import {UsersActions} from './types'
import {LOAD_USERS} from "../../sagas/users/types";

interface IUsersState {
    users: any[],
    isLoadingUsers: boolean,
}

const usersState: IUsersState = {
    users: [],
    isLoadingUsers: false
};

const usersReducer = (state = usersState, action: UsersActions): IUsersState => {
    switch (action.type) {
        case LOAD_USERS:
            return {
                ...state,
                users: action.payload.users,
            };
        default:
            return state;
    }
};

export default usersReducer;
