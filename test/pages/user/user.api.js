import BaseAPI from "../base.api";

const registerPrefixURL = `register`;
const loginPrefixURL = `login`;

const UserAPI = {
    register: (data) => BaseAPI.post(`${registerPrefixURL}`, data),
    login: (data) => BaseAPI.post(`${loginPrefixURL}`, data)
}

export default UserAPI;