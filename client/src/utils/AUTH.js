/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

export default {
    signUpUser: function(newUser) {
        console.log('USERDATA!!!!!: ', newUser);
        return axios.post("/auth/signup", newUser);
    },
    loginUser: async function(user) {
        return axios.post("/auth/login", user)
        // .then(data => data.json());
    },
    getUser: function(user) {
        return axios.get("/auth/user", user);
    }
};