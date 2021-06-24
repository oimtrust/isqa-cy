import BaseAPI from "../base.api";

const userPrefixURL = `users`;

const AdminAPI = {
    createUser: (data) => BaseAPI.post(`${userPrefixURL}`, data),
    getAllUsers: () => BaseAPI.get(`${userPrefixURL}`),
    getAllUsersWithParams: (params) => BaseAPI.get(`${userPrefixURL}?${params}`)
}

export default AdminAPI;