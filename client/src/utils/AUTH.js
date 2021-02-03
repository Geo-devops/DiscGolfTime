/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

export default {
    register: function(userData) {
        return axios.post("/auth/signup", userData);
    }
};