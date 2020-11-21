import {axiosInstance} from "../store";

export function fetchUsers(userId?: number) {
    return axiosInstance.get('/api/users/' + userId);
}