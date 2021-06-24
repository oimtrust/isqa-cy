import dotenv from "dotenv";
import axios from "axios";
import querystring from "querystring";

dotenv.config();

const BaseAPI   = axios.create({
    baseURL: process.env.BASEURL,
    headers: {
        "content-type": "application/x-www-form-urlencoded",
        accept: "application/json"
    },
    // to allow pass request body as object.
    transformRequest: [
        function (data) {
            return querystring.stringify(data)
        }
    ],
    // Always resolve axios promise
    validateStatus: function () {
        return true;
    }
});

export default BaseAPI;